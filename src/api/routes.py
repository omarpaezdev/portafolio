"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import re
import requests
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from flask_mail import Message
from api.models import db
from api.utils import generate_sitemap, APIException
api = Blueprint('api', __name__)

is_dev = os.getenv('FLASK_DEBUG') == '1'
PROD_ORIGINS = ['https://www.omarpaez.es', 'https://omarpaez.es', 'http://localhost:5173', 'http://127.0.0.1:5173']

@api.after_request
def add_cors(response):
    origin = request.headers.get('Origin', '')
    if is_dev:
        response.headers['Access-Control-Allow-Origin'] = '*'
    elif origin in PROD_ORIGINS:
        response.headers['Access-Control-Allow-Origin'] = origin
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
    response.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    response.headers['Access-Control-Max-Age'] = '3600'
    if request.method == 'OPTIONS':
        response.status_code = 204
        return response
    return response


def verify_recaptcha(token):
    secret = os.getenv('RECAPTCHA_SECRET_KEY')
    if not secret or not token:
        current_app.logger.warning('reCAPTCHA: missing secret or token')
        return False
    
    try:
        resp = requests.post(
            'https://www.google.com/recaptcha/api/siteverify',
            data={'secret': secret, 'response': token},
            timeout=5
        )
        data = resp.json()
        current_app.logger.info(f'reCAPTCHA response: {data}')
        return (
            data.get('success') and
            data.get('action') == 'contact' and
            data.get('score', 0) >= 0.5
        )
    except Exception as e:
        current_app.logger.error(f'reCAPTCHA error: {e}')
        return False


@api.route('/contact', methods=['POST'])
def handle_contact():
    try:
        data = request.get_json() or {}
    except Exception:
        return jsonify({'error': 'Solicitud inválida'}), 400
    
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    topic = data.get('topic', '').strip()
    message = data.get('message', '').strip()
    recaptcha_token = data.get('recaptchaToken', '')
    
    if not all([name, email, topic, message]):
        return jsonify({'error': 'Faltan datos requeridos'}), 400
    
    if len(name) > 100:
        return jsonify({'error': 'El nombre no puede exceder 100 caracteres'}), 400
    if len(email) > 254:
        return jsonify({'error': 'El email no puede exceder 254 caracteres'}), 400
    if len(message) > 5000:
        return jsonify({'error': 'El mensaje no puede exceder 5000 caracteres'}), 400
    
    email_regex = r'^[^@\s]+@[^@\s]+\.[^@\s]+$'
    if not re.match(email_regex, email):
        return jsonify({'error': 'Formato de email inválido'}), 400
    
    if os.getenv('RECAPTCHA_SECRET_KEY') and not verify_recaptcha(recaptcha_token):
        return jsonify({'error': 'Verificación de seguridad fallida'}), 403
    
    topic_labels = {
        'empleo': 'Oportunidad laboral',
        'freelance': 'Proyecto freelance',
        'consulta': 'Consulta técnica',
        'otro': 'Otro'
    }
    
    subject = f'Portafolio: {topic_labels.get(topic, topic)} - {name}'
    body = f'''
Nuevo mensaje desde el portafolio:

Nombre: {name}
Email: {email}
Tipo: {topic_labels.get(topic, topic)}

Mensaje:
{message}
'''
    
    try:
        mail = current_app.extensions.get('mail')
        recipient = os.getenv('EMAIL_RECIPIENT')
        
        msg = Message(
            subject=subject,
            recipients=[recipient],
            body=body,
            sender=os.getenv('EMAIL_SENDER')
        )
        mail.send(msg)
        
        return jsonify({'success': True, 'message': 'Mensaje enviado correctamente'}), 200
        
    except Exception as e:
        app = current_app._get_current_object()
        app.logger.error(f"Error sending email: {str(e)}")
        return jsonify({'error': 'Error al enviar el mensaje'}), 500
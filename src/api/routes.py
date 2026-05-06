"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import requests
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from flask_mail import Message
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


def verify_recaptcha(token):
    secret = os.getenv('RECAPTCHA_SECRET_KEY')
    if not secret or not token:
        return False
    
    try:
        response = requests.post(
            'https://www.google.com/recaptcha/api/siteverify',
            data={'secret': secret, 'response': token},
            timeout=5
        )
        data = response.json()
        return (
            data.get('success') and
            data.get('action') == 'contact' and
            data.get('score', 0) >= 0.5
        )
    except Exception:
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
    
    if not verify_recaptcha(recaptcha_token):
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
        return jsonify({'error': 'Error al enviar el mensaje'}), 500
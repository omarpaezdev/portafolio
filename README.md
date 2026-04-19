# 👋 Omar Páez — Portafolio Personal

> Desarrollador Full Stack · React + Python/Flask · Construyo apps que resuelven problemas reales.

[![Sitio web](https://img.shields.io/badge/🌐_Ver_portafolio-omarpaez.es-blue?style=for-the-badge)](https://www.omarpaez.es)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Omar_Páez-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/omarpaez/)

---

## 🚀 ¿Qué es este proyecto?

Este repositorio contiene el código fuente de mi portafolio personal, construido con **React** en el frontend y **Flask** en el backend. Refleja mi perfil como desarrollador Full Stack junior con proyectos propios en producción.

---

## 🛠️ Stack tecnológico

| Capa          | Tecnologías                               |
| ------------- | ----------------------------------------- |
| Frontend      | React, JavaScript (ES6+), CSS3, Bootstrap |
| Backend       | Python, Flask, SQLAlchemy                 |
| Base de datos | PostgreSQL                                |
| Despliegue    | Render.com                                |
| Herramientas  | Vite, Pipenv, Git                         |

---

## 📂 Proyectos destacados

### 🔧 SAAS TallerPro

Aplicación web para la gestión de talleres mecánicos.

- Notificaciones con WhatsApp API, clientes y órdenes de trabajo
- Autenticación de usuarios con JWT
- API REST desarrollada con Flask

- 🔗 [Ver repositorio](#) · [Ver demo](#)

---

### 🎓 MentorMatch

Plataforma donde mentores publican sus mentorías y los estudiantes pueden reservar sesiones.

- Búsqueda de mentores por área de especialización
- Reserva de sesiones con calendario integrado
- Frontend en React con gestión de estado global
- 🔗 [Ver repositorio](#) · [Ver demo](#)

---

## 📁 Estructura del proyecto

```
/
├── src/
│   ├── front/          # React app
│   │   ├── js/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── store/
│   │   └── styles/
│   └── api/            # Flask API
│       ├── models.py
│       ├── routes.py
│       └── commands.py
├── public/
└── migrations/
```

---

## ⚙️ Instalación local

### Requisitos previos

- Python 3.10+
- Node.js 20+
- PostgreSQL

### Backend

```bash
# Instalar dependencias
pipenv install

# Configurar variables de entorno
cp .env.example .env
# Edita .env con tu DATABASE_URL

# Ejecutar migraciones
pipenv run migrate
pipenv run upgrade

# Iniciar servidor
pipenv run start
```

### Frontend

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run start
```

El frontend corre en `http://localhost:3000` y el backend en `http://localhost:3001`.

---

## 🌐 Despliegue

El portafolio está desplegado en **Render.com** con dominio personalizado.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com)

---

## 📬 Contacto

¿Tienes un proyecto en mente o quieres hablar sobre una oportunidad?

- 🌐 [omarpaez.es](https://www.omarpaez.es)
- 💼 [LinkedIn](https://www.linkedin.com/in/omarpaez/)
- 📧 Disponible en el portafolio

---

_Desarrollado con ❤️ usando React + Flask_

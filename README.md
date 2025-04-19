# 🏘️ AdmBarrial-App

**AdmBarrial-App** es una aplicación **full-stack** para la gestión de barrios y comunidades vecinales.  
Permite registrar y gestionar vecinos, reclamos, denuncias, sitios, servicios y movimientos administrativos.  
Desarrollada con un **frontend móvil en React Native (Expo)** y un **backend en Python (Flask + SQLAlchemy)**.

---

## 🔧 Tecnologías

**Frontend (App móvil)**  
- React Native  
- Expo  
- TypeScript  
- React Navigation  
- Axios  
- Expo Location & Image Picker  

**Backend (API REST)**  
- Python  
- Flask  
- SQLAlchemy  
- Flask-CORS  
- SQL Server  

---

## 🚀 Cómo ejecutar el proyecto

### 🔹 Frontend (React Native con Expo)

1. Ir al directorio del frontend:  
   cd Frontend

2. Instalar dependencias:  
   npm install

3. Modificar la URL del backend en config.json:  
   
json
   {
     "BASE_URL": "http://<IP_LOCAL>:5000"
   }
   
4. Iniciar la app:
   npm start

### 🔹 Backend (Flask + SQLAlchemy)
1. Crear entorno virtual (opcional pero recomendado):
  python -m venv venv
  so urce venv/bin/activate (Windows: .\venv\Scripts\activate)

2.Instalar dependencias:
  pip install flask flask_sqlalchemy flask_cors pyodbc

3.Verificar configuración de base de datos en config.py:
  'mssql+pyodbc://usuario:contraseña@localhost:1433/AdmBarrial?driver=ODBC+Driver+17+for+SQL+Server'

4.Ejecutar la app:
  python main.py

from sqlalchemy import text
from config import app, db
from routes import register_blueprints

# Función para verificar la conexión a la base de datos
def check_database_connection():
    try:
        with app.app_context():
            # Consulta SQL para seleccionar todos los usuarios (ejemplo)
            query = text('SELECT * FROM vecinos')
            
            # Ejecutar la consulta SQL
            result = db.session.execute(query)
            
            print("Conexión a la base de datos establecida correctamente.")
            
            # Imprimir los resultados de la consulta (opcional)
            for row in result:
                print(row)
                
    except Exception as e:
        print(f"Error al conectar a la base de datos: {str(e)}")


#check_database_connection()
register_blueprints(app)

@app.route('/')
def index():
    return 'Bienvenido a la App AdmBarrial!'

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Crea todas las tablas en la base de datos, si no están creadas

    # Ejecuta la aplicación en todas las interfaces de red
    app.run(host='0.0.0.0', port=5000, debug=True)

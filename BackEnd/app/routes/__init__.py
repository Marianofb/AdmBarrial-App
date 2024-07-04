import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from routes.denuncia_route import denuncias_bp
from routes.reclamo_route import reclamos_bp
from routes.servicio_route import servicios_bp
from routes.usuario_route import usuarios_bp
from routes.sitio_route import sitios_bp
from routes.rubro_route import rubros_bp
from routes.desperfecto_route import desperfectos_bp

#print("Funciona Route")

# Import the routes
def register_blueprints(app):
    app.register_blueprint(usuarios_bp, url_prefix="/usuarios")
    app.register_blueprint(denuncias_bp, url_prefix="/denuncias")
    app.register_blueprint(reclamos_bp, url_prefix="/reclamos")
    app.register_blueprint(servicios_bp, url_prefix="/servicios")
    app.register_blueprint(sitios_bp, url_prefix="/sitios")
    app.register_blueprint(rubros_bp, url_prefix="/rubros")
    app.register_blueprint(desperfectos_bp, url_prefix="/desperfectos")
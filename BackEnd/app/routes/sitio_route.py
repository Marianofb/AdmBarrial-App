from flask import  Blueprint, request

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from controllers import SitioController

sitios_bp = Blueprint('sitios', __name__)

@sitios_bp.route('/bienvenido')
def hello():
    return "Bienvenido a la Tabla de Sitios"

@sitios_bp.route('getAll', methods=["GET"])
def get_all_sitios():
    return SitioController.get_all_sitios()

@sitios_bp.route('get/<int:legajo>', methods=["GET"])
def get_sitio_by_id(legajo):
    return SitioController.get_sitio_by_id(legajo)
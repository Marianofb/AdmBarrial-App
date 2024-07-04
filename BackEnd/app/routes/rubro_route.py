from flask import  Blueprint, request

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from controllers import RubroContoller

rubros_bp = Blueprint('rubros', __name__)

@rubros_bp.route('/bienvenido')
def hello():
    return "Bienvenido a la Tabla de Rubros"

@rubros_bp.route('getAll', methods=["GET"])
def get_all_rubros():
    return RubroContoller.get_all_rubros()

@rubros_bp.route('get/<int:id>', methods=["GET"])
def get_rubro_by_id(id):
    return RubroContoller.get_rubro_by_id(id)
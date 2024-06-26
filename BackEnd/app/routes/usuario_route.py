from flask import  Blueprint, request

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from controllers import UsuarioController, VecinoController, PersonalController

usuarios_bp = Blueprint('usuarios', __name__)

@usuarios_bp.route('/bienvenido')
def hello():
    return "Bienvenido a la Tabla de Usuarios"


@usuarios_bp.route('/login', methods =["POST"])
def login():
    return UsuarioController.login()

#---------------------------VECINO---------------------------------#

@usuarios_bp.route('vecinos/getAll', methods =["GET"])
def get_vecinos():
    return VecinoController.get_all_vecino()

@usuarios_bp.route('vecinos/get/<string:id>', methods=["GET"])
def get_vecino(id):
    return VecinoController.get_vecino_by_id(id)

@usuarios_bp.route('vecinos/new', methods=["POST"])
def create_vecino():
    data = request.get_json()
    return VecinoController.create_vecino(data)
    
@usuarios_bp.route('vecinos/update/<string:id>', methods=["PUT"])
def update_vecino(id):
    data = request.get_json()
    return VecinoController.update_vecino(id, data)

@usuarios_bp.route('vecinos/delete/<string:id>', methods=["DELETE"])
def delete_vecino(id):
    return VecinoController.delete_vecino(id)

#---------------------------PERSONAL---------------------------------#

@usuarios_bp.route('personal/getAll', methods=["GET"])
def get_all_personal():
    return PersonalController.get_all_personal()

@usuarios_bp.route('personal/get/<int:legajo>', methods=["GET"])
def get_personal(legajo):
    return PersonalController.get_personal_by_legajo(legajo)

@usuarios_bp.route('personal/new', methods=["POST"])
def create_personal():
    data = request.get_json()
    return PersonalController.create_personal(data)

@usuarios_bp.route('personal/update/<int:legajo>', methods=["PUT"])
def update_personal(legajo):
    data = request.get_json()
    return PersonalController.update_personal(legajo, data)

@usuarios_bp.route('personal/delete/<int:legajo>', methods=["DELETE"])
def delete_personal(legajo):
    return PersonalController.delete_personal(legajo)
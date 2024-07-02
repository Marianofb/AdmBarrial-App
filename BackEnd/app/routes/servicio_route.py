from flask import  Blueprint, request

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from controllers import ServicioController

servicios_bp = Blueprint('servicios', __name__)

@servicios_bp.route('/bienvenido')
def hello():
    return "Bienvenido a la Tabla de Servicios"

@servicios_bp.route('/getAll', methods =["GET"])
def get_allServicios():
    return ServicioController.get_all_servicios()

@servicios_bp.route('/get/<int:id>', methods=["GET"])
def get_servicio(id):
    return ServicioController.get_servicio_by_id(id)

@servicios_bp.route('/new', methods=["POST"])
def create_servicio():
    data = request.form.to_dict()
    files = request.files.getlist('fotos')
    response = ServicioController.create_servicio(data, files)
    return response
    
@servicios_bp.route('/update/<string:id>', methods=["PUT"])
def update_servicio(id):
    data = request.get_json()
    return ServicioController.update_servicio(id, data)

@servicios_bp.route('/delete/<string:id>', methods=["DELETE"])
def delete_servicio(id):
    return ServicioController.delete_servicio(id)

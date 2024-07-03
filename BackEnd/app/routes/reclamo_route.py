from flask import Blueprint, request, jsonify

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from controllers import ReclamoController

reclamos_bp = Blueprint('reclamos', __name__)

@reclamos_bp.route('/bienvenido')
def hello():
    return "Bienvenido a la Tabla de Reclamos"

@reclamos_bp.route('/getAll', methods=["GET"])
def get_all_reclamos():
    return ReclamoController.get_all_reclamos()

@reclamos_bp.route('/get/<int:id>', methods=["GET"])
def get_reclamo(id):
    return ReclamoController.get_reclamo_by_id(id)

@reclamos_bp.route('/getBySitio/<int:id>', methods=["GET"])
def get_reclamoBySitio(id):
    return ReclamoController.get_reclamos_by_sitio(id)

@reclamos_bp.route('/getByVecino/<string:documento>', methods=["GET"])
def get_reclamoByVecino(documento):
    return ReclamoController.get_reclamos_by_vecino(documento)

@reclamos_bp.route('/getByPersonal/<int:id>', methods=["GET"])
def get_reclamoByPersonal(id):
    return ReclamoController.get_reclamos_by_personal(id)

@reclamos_bp.route('new', methods=["POST"])
def create_reclamo():
    data = request.form
    files = request.files
    return ReclamoController.create_reclamo(data, files)
    
@reclamos_bp.route('/update/<int:id>', methods=["PUT"])
def update_reclamo(id):
    data = request.get_json()
    return ReclamoController.update_reclamo(id, data)

@reclamos_bp.route('/delete/<int:id>', methods=["DELETE"])
def delete_reclamo(id):
    return ReclamoController.delete_reclamo(id)
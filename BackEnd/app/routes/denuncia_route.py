from flask import Blueprint, request, jsonify

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from controllers import DenunciasContoller

denuncias_bp = Blueprint('denuncias', __name__)

@denuncias_bp.route('/bienvenido')
def hello():
    return "Bienvenido a la Tabla de Denuncias"

@denuncias_bp.route('/getAll', methods=["GET"])
def get_all_denuncia():
    return DenunciasContoller.get_all_denuncias()

@denuncias_bp.route('/get/<int:id>', methods=["GET"])
def get_denuncia(id):
    return DenunciasContoller.get_denuncia_by_id(id)

@denuncias_bp.route('/getBySitio/<int:id>', methods=["GET"])
def get_denuncia_bySitio(id):
    return DenunciasContoller.get_denuncias_by_sitio(id)

@denuncias_bp.route('/getByVecino/<string:documento>', methods=["GET"])
def get_denuncia_byVecino(documento):
    return DenunciasContoller.get_denuncias_by_sitio(documento)

@denuncias_bp.route('new', methods=["POST"])
def create_denuncia():
    data = request.get_json()
    files = request.files
    return DenunciasContoller.create_denuncia(data, files)
    
@denuncias_bp.route('/update/<int:id>', methods=["PUT"])
def update_denuncia(id):
    data = request.get_json()
    return DenunciasContoller.update_denuncia(id, data)

@denuncias_bp.route('/delete/<int:id>', methods=["DELETE"])
def delete_reclamo(id):
    return DenunciasContoller.delete_denuncia(id)
from flask import  Blueprint, request, jsonify

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from config import db
from controllers import DesperfectoController
from models import Desperfecto, Rubro

desperfectos_bp = Blueprint('desperfectos_bp', __name__)

@desperfectos_bp.route('/bienvenido')
def hello():
    return "Bienvenido a la Tabla de Desperfectos"

@desperfectos_bp.route('getAll', methods=["GET"])
def get_all_desperfectos():
    return DesperfectoController.get_all_desperfectos()

@desperfectos_bp.route('get/<int:id>', methods=["GET"])
def get_desperfecto_by_id(id):
    return DesperfectoController.get_desperfecto_by_id(id)

@desperfectos_bp.route('getAllWithRubros', methods=['GET'])
def get_all_desperfectos_with_rubros():
    desperfectos_with_rubros = db.session.query(
        Desperfecto.idDesperfecto, 
        Desperfecto.descripcion, 
        Rubro.descripcion.label('rubro_descripcion')
    ).join(Rubro, Desperfecto.idRubro == Rubro.idRubro).all()
    
    return jsonify([{
        'idDesperfecto': d.idDesperfecto,
        'descripcion': d.descripcion,
        'rubro': d.rubro_descripcion
    } for d in desperfectos_with_rubros])
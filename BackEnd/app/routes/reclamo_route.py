from flask import Blueprint, request, jsonify

from twilio.rest import Client

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

@reclamos_bp.route('vecino/new', methods=["POST"])
def create_reclamVecino():
    data = request.form
    files = request.files
    return ReclamoController.create_reclamoVecino(data, files)

@reclamos_bp.route('personal/new', methods=["POST"])
def create_reclamoPersonal():
    data = request.form
    files = request.files
    return ReclamoController.create_reclamoPersonal(data, files)
    
@reclamos_bp.route('/update/<int:id>', methods=["PUT"])
def update_reclamo(id):
    data = request.get_json()
    return ReclamoController.update_reclamo(id, data)

@reclamos_bp.route('/delete/<int:id>', methods=["DELETE"])
def delete_reclamo(id):
    return ReclamoController.delete_reclamo(id)

@reclamos_bp.route('enviar_sms', methods=['POST'])
@staticmethod
def enviar_sms():
            data = request.json
            mensaje = data.get('mensaje')
            celular = data.get('celular')

            #print("ENVIAR SMS")
            # Configurar credenciales de Twilio
            account_sid = "ACf1fb365402f6e25b11e1d259173a97d1"  # Reemplazar con tu Account SID de Twilio
            auth_token = "f77c85664eee44ddb13593f97fbcc267"  # Reemplazar con tu Auth Token de Twilio
            twilio_phone_number = +17752640959  # Reemplazar con tu número de Twilio

            # Inicializar cliente de Twilio
            client = Client(account_sid, auth_token)

            # Enviar mensaje SMS
            message = client.messages.create(
                body=f"ADM_BARRIAL: Tu RECLAMO a sido actualizado --> {mensaje}",
                from_=twilio_phone_number,
                to=celular
            )
            
            print(message.sid)  # Opcional: Imprimir el SID del mensaje para verificar el envío

            return 200
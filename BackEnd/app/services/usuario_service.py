from flask import jsonify, request
from sqlalchemy import null
import random, string

from twilio.rest import Client


import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from config import db
from models import Vecino, Personal


class UsuarioService:

    @staticmethod
    def loginVecino():
        try:
            data = request.get_json()
            documento = data.get('documento')
            contraseña = data.get('contraseña')

            if not documento or not contraseña:
                #return jsonify({'error': 'Documento y contraseña son requeridos'}), 400
                return False

            # Si no se encontró en Personal, intentar con Vecino
            usuario_vecino = Vecino.query.filter_by(documento=documento).first()
            if usuario_vecino:
                if usuario_vecino.contraseña == contraseña:
                    # Contraseña correcta, autenticación exitosa
                    return True
                else:
                    # Contraseña incorrecta
                    return False

            # Si ninguno coincide
            #return jsonify({'error': 'Documento o contraseña incorrectos'}), 401
            return False

        except Exception as e:
            #return jsonify({'error': str(e)}), 500
            return False
        
    @staticmethod        
    def loginPersonal():
        try:
            data = request.get_json()
            documento = data.get('documento')
            contraseña = data.get('contraseña')

            
            if not documento or not contraseña:
                return False

            # Busca al usuario en la base de datos por el legajo (documento)
            usuario_personal = Personal.query.filter_by(legajo=documento).first()

            if usuario_personal:
                # Verifica la contraseña
                if usuario_personal.password == contraseña:
                    # Contraseña correcta, autenticación exitosa
                    return True
                else:
                    # Contraseña incorrecta
                    return False

            # Si no se encontró en Personal
            return False

        except Exception as e:
            return False
        
    @staticmethod
    def cambiar_clave_acceso_Vecino():
        try:
            data = request.get_json()
            documento = data.get('documento')
            claveActual = data.get('claveActual')
            claveNueva = data.get('claveNueva')
            claveNuevaSegunda = data.get('claveNuevaSegunda')
            
            # Verificar si el vecino existe en la base de datos
            vecino = Vecino.query.filter_by(documento=documento).first()
            
            if not vecino or vecino.contraseña != claveActual or claveNueva != claveNuevaSegunda:
                return False
            
            vecino.contraseña = claveNueva
            db.session.commit()
            
            return True 
        
        except Exception as e:
            db.session.rollback()
            return False
        
    @staticmethod
    def cambiar_clave_acceso_Personal():
        try:
            data = request.get_json()
            documento = data.get('documento')
            claveActual = data.get('claveActual')
            claveNueva = data.get('claveNueva')
            claveNuevaSegunda = data.get('claveNuevaSegunda')
            
            # Verificar si el vecino existe en la base de datos
            personal = Personal.query.filter_by(legajo=documento).first()
            
            if not personal or personal.password != claveActual or claveNueva != claveNuevaSegunda:
                return False
            
            personal.password = claveNueva
            db.session.commit()
            
            return True 
        
        except Exception as e:
            db.session.rollback()
            return False
#---------------------------VECINO---------------------------------#
class VecinoService:

    @staticmethod
    def enviar_sms(nueva_contraseña, celular):
        try:
            #print("ENVIAR SMS")
            # Configurar credenciales de Twilio
            account_sid = "ACf1fb365402f6e25b11e1d259173a97d1"  # Reemplazar con tu Account SID de Twilio
            auth_token = "f77c85664eee44ddb13593f97fbcc267"  # Reemplazar con tu Auth Token de Twilio
            twilio_phone_number = +17752640959  # Reemplazar con tu número de Twilio

            # Inicializar cliente de Twilio
            client = Client(account_sid, auth_token)

            # Enviar mensaje SMS
            message = client.messages.create(
                body=f"ADM_BARRIAL: Tu nueva contraseña es: {nueva_contraseña}",
                from_=twilio_phone_number,
                to=celular
            )
            
            print(message.sid)  # Opcional: Imprimir el SID del mensaje para verificar el envío
            return True
        
        except Exception as e:
            print(f"Error al enviar SMS: {str(e)}")
            return False
    
    @staticmethod
    def generar_clave_acceso():
        try:
            #print("GNRAR CLAVE")

            data = request.get_json()
            documento = data.get('documento')
            celular = data.get('celular')
            
            # Verificar si el vecino existe en la base de datos
            vecino = Vecino.query.filter_by(documento=documento).first()
            #print("Vecino")
            #print("Nombre: ", vecino.nombre)
            #print("Contraseña: ", vecino.contraseña)
            if not vecino or not vecino.contraseña != null:
                #print("PRIMERO FALSO")
                return False
            
            # Actualizar la clave de acceso del vecino en la base de datos
            nueva_contraseña = ''.join(random.choices(string.ascii_letters + string.digits, k=10))
            vecino.contraseña = nueva_contraseña
            vecino.celular = celular
            
            if VecinoService.enviar_sms(nueva_contraseña, celular):
                # Actualizar la contraseña del vecino en la base de datos
                vecino.contraseña = nueva_contraseña
                vecino.celular = celular
                db.session.commit()
                return True
            else:
                return False
            
        
        except Exception as e:
            db.session.rollback()
            return False

    @staticmethod
    def get_all_vecino():
        vecinos = Vecino.query.all()
        json_vecinos = list(map(lambda x: x.to_json(), vecinos))
        return jsonify({"vecinos": json_vecinos})

    @staticmethod
    def get_vecino_by_id(documento):
        vecino = Vecino.query.get(documento)
        return jsonify(vecino.to_json())
    
    @staticmethod
    def create_vecino(data):
        new_vecino = Vecino(
            documento=data['documento'],
            nombre=data['nombre'],
            apellido=data['apellido'],
            direccion=data['direccion'],
            codigoBarrio=data['codigoBarrio']
        )
        db.session.add(new_vecino)
        db.session.commit()
        return jsonify(new_vecino.to_json())
    
    @staticmethod
    def update_vecino(documento, data):
        try:
            updated_vecino = Vecino.query.get(documento)
            if updated_vecino:
                updated_vecino.nombre = data.get('nombre', updated_vecino.nombre)
                updated_vecino.apellido = data.get('apellido', updated_vecino.apellido)
                updated_vecino.direccion = data.get('direccion', updated_vecino.direccion)
                updated_vecino.codigoBarrio = data.get('codigoBarrio', updated_vecino.codigoBarrio)
                db.session.commit()
                return jsonify(updated_vecino.to_json()), 200
            else:
                return {"error": f"No se encontró un vecino con documento {documento}"}, 404
        except Exception as e:
            db.session.rollback()
            return {"error": str(e)}, 500
    
    @staticmethod
    def delete_vecino(documento):
        try:
            deleted_vecino = Vecino.query.get(documento)
            if deleted_vecino:
                db.session.delete(deleted_vecino)
                db.session.commit()
                return {"message": "Vecino eliminado con éxito."}, 200
            else:
                return {"error": f"No se encontró un vecino con documento {documento}"}, 404
        except Exception as e:
            db.session.rollback()
            return {"error": str(e)}, 500
        
#---------------------------PERSONAL---------------------------------#

class PersonalService:
    @staticmethod
    def get_all_personal():
        personal = Personal.query.all()
        json_personal = list(map(lambda x: x.to_json(), personal))
        return jsonify({"personal": json_personal})

    @staticmethod
    def get_personal_by_legajo(legajo):
        personal = Personal.query.get(legajo)
        if personal:
            return jsonify(personal.to_json())
        else:
            return {"error": f"No se encontró un personal con legajo {legajo}"}, 404

    @staticmethod
    def create_personal(data):
        new_personal = Personal(
            legajo=data['legajo'],
            nombre=data['nombre'],
            apellido=data['apellido'],
            documento=data['documento'],
            password=data['password'],
            sector=data['sector'],
            categoria=data['categoria'],
            fechaIngreso=data['fechaIngreso']
        )
        db.session.add(new_personal)
        db.session.commit()
        return jsonify(new_personal.to_json()), 201

    @staticmethod
    def update_personal(legajo, data):
        try:
            updated_personal = Personal.query.get(legajo)
            if updated_personal:
                updated_personal.nombre = data.get('nombre', updated_personal.nombre)
                updated_personal.apellido = data.get('apellido', updated_personal.apellido)
                updated_personal.documento = data.get('documento', updated_personal.documento)
                updated_personal.password = data.get('password', updated_personal.password)
                updated_personal.sector = data.get('sector', updated_personal.sector)
                updated_personal.categoria = data.get('categoria', updated_personal.categoria)
                updated_personal.fechaIngreso = data.get('fechaIngreso', updated_personal.fechaIngreso)
                db.session.commit()
                return jsonify(updated_personal.to_json()), 200
            else:
                return {"error": f"No se encontró un personal con legajo {legajo}"}, 404
        except Exception as e:
            db.session.rollback()
            return {"error": str(e)}, 500

    @staticmethod
    def delete_personal(legajo):
        try:
            deleted_personal = Personal.query.get(legajo)
            if deleted_personal:
                db.session.delete(deleted_personal)
                db.session.commit()
                return {"message": "Personal eliminado con éxito."}, 200
            else:
                return {"error": f"No se encontró un personal con legajo {legajo}"}, 404
        except Exception as e:
            db.session.rollback()
            return {"error": str(e)}, 500
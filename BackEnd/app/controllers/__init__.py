import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from controllers.denuncia_controller import DenunciasContoller
from controllers.reclamo_controller import ReclamoController
from controllers.servicio_controller import ServicioController
from controllers.usuario_controller import UsuarioController, VecinoController, PersonalController

#print("Funciona Controller")
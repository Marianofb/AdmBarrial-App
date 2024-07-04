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
from controllers.sitio_controller import SitioController
from controllers.rubro_controller import RubroContoller
from controllers.desperfecto_controller import DesperfectoController

#print("Funciona Controller")
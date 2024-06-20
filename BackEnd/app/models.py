from config import db

class Desperfecto(db.Model):
    __tablename__ = 'desperfectos'
    idDesperfecto = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.String(80), nullable=False)
    idRubro = db.Column(db.Integer, db.ForeignKey('rubros.idRubro'), nullable=False)
    
    def __repr__(self):
        return f'<Desperfecto id={self.idDesperfecto} descripcion={self.descripcion}>'
    
    def to_json(self):
        return {
            'idDesperfecto': self.idDesperfecto,
            'descripcion': self.descripcion,
            'idRubro': self.idRubro
        }

class Rubro(db.Model):
    __tablename__ = 'rubros'
    idRubro = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.String(80), nullable=False)
    desperfectos = db.relationship('Desperfecto', backref='rubro', lazy=True)
    
    def __repr__(self):
        return f'<Rubro id={self.idRubro} descripcion={self.descripcion}>'
    
    def to_json(self):
        return {
            'idRubro': self.idRubro,
            'descripcion': self.descripcion,
            'desperfectos': [desperfecto.to_json() for desperfecto in self.desperfectos]
        }

class Barrio(db.Model):
    __tablename__ = 'barrios'
    idBarrio = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), nullable=False)
    vecinos = db.relationship('Vecino', backref='barrio', lazy=True)
    
    def __repr__(self):
        return f'<Barrio id={self.idBarrio} nombre={self.nombre}>'
    
    def to_json(self):
        return {
            'idBarrio': self.idBarrio,
            'nombre': self.nombre,
            'vecinos': [vecino.to_json() for vecino in self.vecinos]
        }

class Vecino(db.Model):
    __tablename__ = 'vecinos'
    documento = db.Column(db.String(80), primary_key=True)
    nombre = db.Column(db.String(80), nullable=False)
    apellido = db.Column(db.String(80), nullable=False)
    direccion = db.Column(db.String(80), nullable=False)
    codigoBarrio = db.Column(db.Integer, db.ForeignKey('barrios.idBarrio'), nullable=False)
    denuncias = db.relationship('Denuncia', backref='vecino', lazy=True)
    reclamos = db.relationship('Reclamo', backref='vecino', lazy=True)

    def __repr__(self):
        return f'<Vecino documento={self.documento} nombre={self.nombre} apellido={self.apellido}>'

    def to_json(self):
        return {
            'documento': self.documento,
            'nombre': self.nombre,
            'apellido': self.apellido,
            'direccion': self.direccion,
            'codigoBarrio': self.codigoBarrio
        }

class Denuncia(db.Model):
    __tablename__ = 'denuncias'
    idDenuncias = db.Column(db.Integer, primary_key=True)
    documento = db.Column(db.String(80), db.ForeignKey('vecinos.documento'), nullable=False)
    idSitio = db.Column(db.Integer, db.ForeignKey('sitios.idSitio'), nullable=False)
    descripcion = db.Column(db.String(80), nullable=False)
    estado = db.Column(db.String(80), nullable=False)
    aceptaResponsabilidad = db.Column(db.Boolean, nullable=False)

    def __repr__(self):
        return f'<Denuncia id={self.idDenuncias} descripcion={self.descripcion} estado={self.estado}>'

    def to_json(self):
        return {
            'idDenuncias': self.idDenuncias,
            'documento': self.documento,
            'idSitio': self.idSitio,
            'descripcion': self.descripcion,
            'estado': self.estado,
            'aceptaResponsabilidad': self.aceptaResponsabilidad
        }

class Sitio(db.Model):
    __tablename__ = 'sitios'
    idSitio = db.Column(db.Integer, primary_key=True)
    latitud = db.Column(db.Float, nullable=False)
    longitud = db.Column(db.Float, nullable=False)
    calle = db.Column(db.String(80), nullable=False)
    numero = db.Column(db.String(80), nullable=False)
    entreCalleA = db.Column(db.String(80), nullable=True)
    entreCalleB = db.Column(db.String(80), nullable=True)
    descripcion = db.Column(db.String(80), nullable=True)
    aCargoDe = db.Column(db.String(80), nullable=True)
    apertura = db.Column(db.Date, nullable=True)
    cierre = db.Column(db.Date, nullable=True)
    comentarios = db.Column(db.String(80), nullable=True)
    denuncias = db.relationship('Denuncia', backref='sitio', lazy=True)
    reclamos = db.relationship('Reclamo', backref='sitio', lazy=True)
    
    def __repr__(self):
        return f'<Sitio id={self.idSitio} calle={self.calle} numero={self.numero}>'
    
    def to_json(self):
        return {
            'idSitio': self.idSitio,
            'latitud': self.latitud,
            'longitud': self.longitud,
            'calle': self.calle,
            'numero': self.numero,
            'entreCalleA': self.entreCalleA,
            'entreCalleB': self.entreCalleB,
            'descripcion': self.descripcion,
            'aCargoDe': self.aCargoDe,
            'apertura': self.apertura,
            'cierre': self.cierre,
            'comentarios': self.comentarios,
            'denuncias': [denuncia.to_json() for denuncia in self.denuncias],
            'reclamos': [reclamo.to_json() for reclamo in self.reclamos]
        }

class Reclamo(db.Model):
    __tablename__ = 'reclamos'
    idReclamo = db.Column(db.Integer, primary_key=True)
    documento = db.Column(db.String(80), db.ForeignKey('vecinos.documento'), nullable=False)
    idSitio = db.Column(db.Integer, db.ForeignKey('sitios.idSitio'), nullable=False)
    idDesperfecto = db.Column(db.Integer, db.ForeignKey('desperfectos.idDesperfecto'), nullable=False)
    descripcion = db.Column(db.String(80), nullable=False)
    estado = db.Column(db.String(80), nullable=False)
    idReclamoUnificado = db.Column(db.Integer, nullable=True)
    legajo = db.Column(db.Integer, db.ForeignKey('personal.legajo'), nullable=False)
    movimientos = db.relationship('MovimientoReclamo', backref='reclamo', lazy=True)
    
    def __repr__(self):
        return f'<Reclamo id={self.idReclamo} estado={self.estado}>'
    
    def to_json(self):
        return {
            'idReclamo': self.idReclamo,
            'documento': self.documento,
            'idSitio': self.idSitio,
            'idDesperfecto': self.idDesperfecto,
            'descripcion': self.descripcion,
            'estado': self.estado,
            'idReclamoUnificado': self.idReclamoUnificado,
            'legajo': self.legajo,
            'movimientos': [movimiento.to_json() for movimiento in self.movimientos]
        }

class MovimientoReclamo(db.Model):
    __tablename__ = 'movimientosReclamo'
    idMovimiento = db.Column(db.Integer, primary_key=True)
    idReclamo = db.Column(db.Integer, db.ForeignKey('reclamos.idReclamo'), nullable=False)
    responsable = db.Column(db.String(80), nullable=False)
    causa = db.Column(db.String(80), nullable=False)
    fecha = db.Column(db.Date, nullable=False)
    
    def __repr__(self):
        return f'<MovimientoReclamo id={self.idMovimiento} responsable={self.responsable}>'
    
    def to_json(self):
        return {
            'idMovimiento': self.idMovimiento,
            'idReclamo': self.idReclamo,
            'responsable': self.responsable,
            'causa': self.causa,
            'fecha': self.fecha.isoformat()  # Convertir fecha a string en formato ISO
        }

class Personal(db.Model):
    __tablename__ = 'personal'
    legajo = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), nullable=False)
    apellido = db.Column(db.String(80), nullable=False)
    documento = db.Column(db.String(80), nullable=False, unique=True)
    password = db.Column(db.String(80), nullable=False)
    sector = db.Column(db.String(80), nullable=False)
    categoria = db.Column(db.String(80), nullable=False)
    fechaIngreso = db.Column(db.Date, nullable=False)
    reclamos = db.relationship('Reclamo', backref='personal', lazy=True)
    
    def __repr__(self):
        return f'<Personal legajo={self.legajo} nombre={self.nombre} apellido={self.apellido}>'
    
    def to_json(self):
        return {
            'legajo': self.legajo,
            'nombre': self.nombre,
            'apellido': self.apellido,
            'documento': self.documento,
            'sector': self.sector,
            'categoria': self.categoria,
            'fechaIngreso': self.fechaIngreso.isoformat(),  # Asegúrate de que la fecha se convierte correctamente
            'reclamos': [reclamo.to_json() for reclamo in self.reclamos]
        }

class Servicio(db.Model):
    __tablename__ = 'servicios'
    idServicio = db.Column(db.Integer, primary_key=True)
    tipo = db.Column(db.String(80), nullable=False)
    descripcion = db.Column(db.String(255), nullable=False)
    estado = db.Column(db.String(50), nullable=False)
    
    def __repr__(self):
        return f'<Servicio id={self.idServicio} tipo={self.tipo} descripcion={self.descripcion} estado={self.estado}>'
    
    def to_json(self):
        return {
            'idServicio': self.idServicio,
            'tipo': self.tipo,
            'descripcion': self.descripcion,
            'estado': self.estado
        }
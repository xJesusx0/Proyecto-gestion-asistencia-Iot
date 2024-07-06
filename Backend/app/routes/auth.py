from flask import Blueprint
from flask import request
from flask import jsonify
from flask import session

from ..config import valid_token

from Database.auth import *

auth_bp = Blueprint('auth',__name__,url_prefix='/auth')

@auth_bp.route('/login', methods = ['POST'])
def login():

    token = request.headers.get('token')

    if not valid_token(token):
        return jsonify({'message': 'Invalid token'}), 401

    request_body = request.get_json()

    response = validateLogin(auth_bp.mysql,request_body)

    if response == None:
        return jsonify({
            'error':'datos incorrectos'
        }),401

    roles = get_roles(auth_bp.mysql,response['id_usuario'])
    data = {
        'user-data':response,
        'roles':roles
    }
    
    session['logged-in'] = True
    session['user-id'] = response['id_usuario']
    if len(roles) == 1:
        session['role'] = roles[0]['nombre'].lower()

    print(session)
    return jsonify(data),200

@auth_bp.route('/set-role',methods = ['POST']) 
def set_role():
    request_body = request.get_json()

    if request_body['role'] :
        session['role'] = request_body['role']
        return jsonify({'response':'Operacion exitosa'}),200
    
    return jsonify({'error':'se esperaba un rol'}),401

@auth_bp.route('/validate-login',methods=['GET'])
def validate_login():
    print(session)
    logged_in = session.get('logged-in',False)
    return jsonify({'response':logged_in})

@auth_bp.route('/logout',methods = ['POST'])
def logout():
    session.clear()  
    print(session)
    return jsonify({'response':'sesion limpiada correctamente'}),200

@auth_bp.route('/validate-role', methods=['GET'])
def validate_role():
    routes = {
        'estudiante': [
            'students.html',
            'students',
            'history',
            'history.html',
            'justificacion',
            'justificacion.html'
        ],
        'profesor': [
            'teachers.html',
            'teachers',
            'students-list.html',
            'students-list'
        ],
        'administrador': [
            'administrators.html',
            'administrators',
            'add-student.html',
            'add-student'
        ]
    }

    # Obtener el parámetro 'url' de la consulta GET
    url = request.args.get('url')
    
    # Validar que 'url' esté presente en la solicitud
    if not url:
        return jsonify({'error': 'Se esperaba un parámetro "url" en la solicitud'}), 400

    # Obtener el rol actual de la sesión
    role = session.get('role')

    # Validar que 'role' esté presente en la sesión y que sea válido
    if not role or role not in routes:
        return jsonify({'valid-role': False, 'valid-route': False}), 401

    # Verificar si la 'url' solicitada está en las rutas permitidas para el rol actual
    valid_route = url in routes[role]
    valid_role = True  # Si llegamos aquí, el rol siempre será válido si está en 'routes'

    return jsonify({'valid-role': valid_role, 'valid-route': valid_route})

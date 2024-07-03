from flask import Blueprint
from flask import request
from flask import jsonify
from flask import session
from flask import current_app
from ..config import valid_token

from Database.auth import *

auth_bp = Blueprint('auth',__name__,url_prefix='/auth')

@auth_bp.route('/login', methods = ['POST'])
def login():

    token = request.headers.get('token')

    if not valid_token(token):
        return jsonify({'message': 'Invalid token'}), 401

    request_body = request.get_json()

    print(request_body)
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

    return jsonify(data),200
    

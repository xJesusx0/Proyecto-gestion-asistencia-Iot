from functools import wraps
from flask import request, jsonify

class Config:
    SESSION_PERMANENT = False
    SESSION_TYPE = 'filesystem'
    MYSQL_HOST = 'localhost'
    MYSQL_USER = 'root'
    MYSQL_PASSWORD = 'contraseña'
    MYSQL_DB = 'proyecto'
    SECRET_KEY = 'secret'
    IP = '127.0.0.1' # Tu ip

SECRET_TOKEN = 'token'

def valid_token(token):
    return token == SECRET_TOKEN

def token_required (func:callable):
    @wraps(func)
    def wrapper(*args,**kwargs):

        token = request.headers.get('token')

        if not token or not valid_token(token):
            return jsonify({'message': 'Invalid token'}), 401

        return func(*args, **kwargs)
    
    return wrapper
from flask import Flask
from flask_cors import CORS
from flask_session import Session
from flask import make_response

from flask_mysqldb import MySQL
from app.config import Config

from app.routes.auth import auth_bp

app = Flask(__name__)

app.config.from_object(Config)
app.secret_key = 'secret'

Session(app)
CORS(app, supports_credentials=True, resources={
    r"*": {"origins": ["http://localhost", "http://192.168.1.12"]}
})
mysql = MySQL(app)

auth_bp.mysql = mysql
app.register_blueprint(auth_bp)
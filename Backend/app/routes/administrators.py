from flask import Blueprint
from flask import request
from flask import jsonify
from flask import session
import io
import csv
admin_bp = Blueprint('admin',__name__,url_prefix='/admin')

@admin_bp.route('/upload-and-register-users', methods=['POST'])
def upload_and_register_users():
    if 'file' not in request.files:
        return jsonify({'response': 'No se ha seleccionado ningún archivo'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'response': 'No se ha seleccionado ningún archivo'}), 400

    if file and file.filename.endswith('.csv'):
        stream = io.StringIO(file.stream.read().decode("UTF8"), newline=None)
        csv_input = csv.reader(stream)
        
        csv_content = [row for row in csv_input]

        print(csv_content)
        
        return jsonify({'response': 'Archivo subido exitosamente', 'content': csv_content})

    return jsonify({'response': 'Archivo no permitido'}), 400
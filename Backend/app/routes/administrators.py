from flask import Blueprint
from flask import request
from flask import jsonify
from flask import session
import io
import csv

from Database.administrators import insert_by_csv
from Database.encrypt import encrypt
from Database import valid_table

admin_bp = Blueprint('admin',__name__,url_prefix='/admin')

def valid_csv(stream,table:set):
    stream.seek(0)

    csv_to_dict = csv.DictReader(stream)

    first_row = next(csv_to_dict, None)
    if first_row is None:
        return False  

    valid_list = all(table.issubset(element.keys()) for element in csv_to_dict)
    return valid_list

@admin_bp.route('/upload-and-register-users', methods=['POST'])
def upload_and_register_users():
    if 'csvFile' not in request.files:
        return jsonify({'response': 'Se esperaba un archivo'}), 400

    file = request.files['csvFile']

    if file.filename == '':
        return jsonify({'response': 'No se selecciono un archivo'}), 400

    table = request.form.get('table')
    if not table:
        return jsonify({'response': 'Se esperaba una tabla'}), 400

    columns = valid_table(table)

    if columns == None:
        return jsonify({'response':'Columnas invalidas'}),400

    if not file or not file.filename.endswith('.csv'):
        return jsonify({'response': 'Solo se aceptan archivos .csv'}), 400
        
    stream = io.StringIO(file.stream.read().decode("UTF8"), newline=None)
    valid_list = valid_csv(stream,columns)

    stream.seek(0)

    csv_file = csv.reader(stream)

    if valid_list != True:
        return jsonify({'response':'Headers o columnas inválidas en el archivo CSV'}),400
    
    first_row = True
    users_list = []

    if table == 'usuarios':
        users_roles = []

    for row in csv_file:
        if first_row:
            first_row = False
            continue
        
        if table == 'usuarios':
            users_roles.append((row[0],row[-1]))
            del row[-1]

        row[2] = encrypt(row[2])
        users_list.append(tuple(row))

    res = insert_by_csv(admin_bp.mysql,users_list,table)
    if res:
        return jsonify({'response':str(res)}),400

    if table == 'usuarios':
        res = insert_by_csv(admin_bp.mysql,users_roles,'usuarios_roles')
        if res:
            return jsonify({'response':str(res)}),400

    return jsonify({'response': 'ok', 'data': users_list}), 200

    
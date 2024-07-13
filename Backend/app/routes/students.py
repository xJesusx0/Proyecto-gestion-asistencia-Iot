from flask import Blueprint, request, jsonify, session
from ..config import token_required
from Database.students import *

students_bp = Blueprint('students', __name__, url_prefix='/students')

@students_bp.route('/get-modules',methods=['GET'])
@token_required
def get_modules():

    #rl = request.args.get('url')
    student_id = session['user-id']
    groups = get_modules_by_id(students_bp.mysql,student_id)    
    return jsonify(groups),200


from Database import handle_database_operations

@handle_database_operations
def validateLogin(mysql,cursor,user_data:dict):
    username = user_data['username']
    password = user_data['password']
    role = user_data['role']

    roles_id = {
        'estudiante':1,
        'profesor':2,
        'administrador':3
    }

    role_id = roles_id[role]

    cursor.execute('SELECT * FROM usuarios WHERE correo = %s AND contraseña = %s AND id_rol = %s',(username,password,role_id))
    response = cursor.fetchone()

    if response:
        return response

    return None


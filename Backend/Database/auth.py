from Database import handle_database_operations

@handle_database_operations
def validateLogin(mysql,cursor,user_data:dict):
    username = user_data['username']
    password = user_data['password']
    role = user_data['role']

    cursor.execute('SELECT * FROM usuarios WHERE correo = %s AND contrasena = %s AND rol = %s',(username,password,role))
    response = cursor.fetchone()

    if response:
        return response

    return None


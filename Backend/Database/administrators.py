from Database import handle_database_operations

from Database.encrypt import encrypt

@handle_database_operations
def insert_by_csv(mysql,cursor,users_list:list,tablename:str):
    print(tablename)

    querys = {
        'usuarios':'INSERT INTO usuarios (id_usuario,correo,contraseña, nombres, apellidos,numero_telefonico) VALUES (%s,%s,%s,%s,%s,%s)',
        'estudiantes': 'INSERT INTO estudiante (id_estudiante, id_programa, cuatrimestre) VALUES (%s, %s, %s)',
        'profesores': 'INSERT INTO profesor (id_profesor, especialidad) VALUES (%s, %s)',
        'usuarios_roles': 'INSERT INTO usuarios_roles (id_usuario, id_rol) VALUES (%s, %s)'

    }

    query = querys.get(tablename,None)
    if query == None:
        raise ValueError('Nombre de tabla invalida')
    try:
        cursor.executemany(query,users_list)
    except Exception as e:
        return e
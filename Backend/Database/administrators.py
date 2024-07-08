from Database import handle_database_operations

from Database.encrypt import encrypt

@handle_database_operations
def insert_by_csv(mysql,cursor,users_list:list):
    print(users_list)
    query = 'INSERT INTO usuarios (id_usuario,correo,contraseña, nombres, apellidos,numero_telefonico) VALUES (%s,%s,%s,%s,%s,%s)'
    try:
        cursor.executemany(query,users_list)
    except Exception as e:
        return e
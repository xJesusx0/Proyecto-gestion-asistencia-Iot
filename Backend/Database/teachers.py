from Database import handle_database_operations

@handle_database_operations
def get_groups_by_teachers_id(mysql,cursor,teacher_id:str):
    cursor.execute('SELECT * FROM grupo WHERE id_profesor = %s',(teacher_id,))
    response = cursor.fetchall()
    return response
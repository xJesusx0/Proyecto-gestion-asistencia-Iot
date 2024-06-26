from functools import wraps
from MySQLdb.cursors import DictCursor

def handle_database_operations(func: callable) -> callable:
    @wraps(func)
    def wrapper(mysql, *args, **kwargs):
        cursor = mysql.connection.cursor(DictCursor)
        try:
            result = func(mysql, cursor, *args, **kwargs)
            mysql.connection.commit()
            return result
        except Exception as error:
            mysql.connection.rollback()
            print("Database error:", error)
        finally:
            cursor.close()
    return wrapper

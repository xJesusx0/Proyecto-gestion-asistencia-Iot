window.routes = {
    'estudiante': [
        'students.html',
        'students',
        'history',
        'history.html',
        'justificacion',
        'justificacion.html'
    ],
    'profesor': [
        'teachers.html',
        'teachers',
        'students-list.html',
        'students-list'
    ],
    'administrador': [
        'administrators.html',
        'administrators',
        'add-student.html',
        'add-student'
    ]
}

const jsonLocalRoutes = {
    'usersData': '../json/users_data.json',
    'studentsData': '../json/students.json',
    'teachersData': '../json/teachers.json',
    'adminsData': '../json/administrators.json',
    'coursesData':'../json/courses.json',
    'failsData':'../json/fails.json',
    'attendancesData':'../json/attendances.json'
}

const baseUrl = 'https://docs.google.com/spreadsheets/d/1k1gh7R8FOLGJsYTvn7idyoLi_HhSJqSUJ3hoAUy37xo/export?format=csv&gid='

const jsonRemoteRoutes = {
    'usersData': `${baseUrl}0`,
    'registrationsData':`${baseUrl}1547156438`,
    'studentsData': `${baseUrl}1878527769`,
    'teachersData': 'https://raw.githubusercontent.com/xJesusx0/Proyecto-gestion-asistencia-Iot/main/Frontend/json/teachers.json',
    'adminsData': 'https://raw.githubusercontent.com/xJesusx0/Proyecto-gestion-asistencia-Iot/main/Frontend/json/administrators.json',
    'coursesData':'https://raw.githubusercontent.com/xJesusx0/Proyecto-gestion-asistencia-Iot/main/Frontend/json/courses.json',
    'failsData':'https://raw.githubusercontent.com/xJesusx0/Proyecto-gestion-asistencia-Iot/main/Frontend/json/fails.json',
    'attendancesData':'https://raw.githubusercontent.com/xJesusx0/Proyecto-gestion-asistencia-Iot/main/Frontend/json/attendances.json'
}


const getJsonRoutes = (environment = 'local') => {
    if ( environment === 'local'){
        return jsonLocalRoutes;
    }

    if (environment === 'remote'){
        return jsonRemoteRoutes;
    }
};

const ROUTES = getJsonRoutes('remote'); //Cambiar esto a remote cuando se haga en main

window.jsonRoutes = ROUTES; 
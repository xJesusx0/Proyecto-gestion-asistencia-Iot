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

const jsonRemoteRoutes = {
    'usersData': 'https://raw.githubusercontent.com/xJesusx0/Actividad-paginas-web/main/json/users_data.json',
    'studentsData': 'https://raw.githubusercontent.com/xJesusx0/Actividad-paginas-web/main/json/students.json',
    'teachersData': 'https://raw.githubusercontent.com/xJesusx0/Actividad-paginas-web/main/json/teachers.json',
    'adminsData': 'https://raw.githubusercontent.com/xJesusx0/Actividad-paginas-web/main/json/administrators.json',
    'coursesData':'https://raw.githubusercontent.com/xJesusx0/Actividad-paginas-web/main/json/courses.json',
    'failsData':'https://raw.githubusercontent.com/xJesusx0/Actividad-paginas-web/main/json/fails.json',
    'attendancesData':'https://raw.githubusercontent.com/xJesusx0/Actividad-paginas-web/main/json/attendances.json'
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

// console.log(window.jsonRoutes);

window.routes = {
    'estudiante': [
        'students.html',
        'history',
        'history.html'
    ],
    'profesor': [
        'teachers.html',
        'teachers',
        'students-list.html'
    ],
    'administrador': [
        'administrators.html'
    ]
}

const jsonLocalRoutes = {
    'usersData': '../json/users_data.json',
    'studentsData': '../json/students.json',
    'teachersData': '../json/teachers.json',
    'adminsData': '../json/administrators.json',
    'coursesData':'../json/courses.json'
}

const jsonRemoteRoutes = {
    'usersData': 'https://raw.githubusercontent.com/xJesusx0/Actividad-paginas-web/main/json/users_data.json',
    'studentsData': 'https://raw.githubusercontent.com/xJesusx0/Actividad-paginas-web/main/json/students.json',
    'teachersData': 'https://raw.githubusercontent.com/xJesusx0/Actividad-paginas-web/main/json/teachers.json',
    'adminsData': 'https://raw.githubusercontent.com/xJesusx0/Actividad-paginas-web/main/json/administrators.json',
    'coursesData':'https://raw.githubusercontent.com/xJesusx0/Actividad-paginas-web/main/json/courses.json'
}


const getJsonRoutes = (environment = 'local') => {
    if ( environment === 'local'){
        return jsonLocalRoutes;
    }

    if (environment === 'remote'){
        return jsonRemoteRoutes;
    }
};

const ROUTES = getJsonRoutes('local'); //Cambiar esto a remote cuando se haga en main

window.jsonRoutes = ROUTES; 

// console.log(window.jsonRoutes);

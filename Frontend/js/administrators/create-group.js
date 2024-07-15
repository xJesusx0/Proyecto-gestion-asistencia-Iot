document.addEventListener('DOMContentLoaded',() => {
    
    const teachersUrl = `${config.baseUrl}/admin/get-teachers`;
    const modulesUrl = `${config.baseUrl}/admin/get-modules`;
    const classroomsUrl = `${config.baseUrl}/admin/get-classrooms`;
    
    request('GET',teachersUrl)
    .then(response => {
        console.log(response);
        
        const teachers = document.getElementById('teachers');
        response.forEach(teacher => {
            const teacherOption = document.createElement('option');
            teacherOption.innerHTML = teacher.nombres;
            teacherOption.setAttribute('value',teacher.id_usuario);

            teachers.appendChild(teacherOption);
        })

    })

    request('GET',modulesUrl)
    .then(response => {
        console.log(response);

        const modules = document.getElementById('modules');
        response.forEach(module => {
            const moduleOption = document.createElement('option');
            moduleOption.innerHTML = module.nombre;
            moduleOption.setAttribute('value',module.id_modulo);

            modules.appendChild(moduleOption);
        })
    })

    request('GET',classroomsUrl)
    .then(response => {
        console.log(response);

        const classrooms = document.getElementById('classrooms');
        response.forEach(classroom => {
            const classroomOption = document.createElement('option');
            classroomOption.innerHTML = classroom.nombre + ' ' + classroom.sede;
            classroomOption.setAttribute('value',classroom.id_salon);
            classrooms.appendChild(classroomOption);
        })
    })
});

const createGroup = () => {
    const selectedTeacher = document.getElementById('teachers').value;
    const selectedModule = document.getElementById('modules').value;
    const selectedClassroom = document.getElementById('classrooms').value;

    console.log(selectedClassroom,selectedModule,selectedTeacher)

}
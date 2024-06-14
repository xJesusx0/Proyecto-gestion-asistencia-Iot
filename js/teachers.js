fetch(window.jsonRoutes.teachersData)
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo leer el archivo JSON')
    }

    return response.json();
  })

  .then(data => {

    data = data['0']

    const userId = userData.userId;
    teacher = data[userId];

    fetch(window.jsonRoutes.coursesData)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo leer el archivo JSON de cursos');
        }
        return response.json();
      })

      .then(coursesData => {
        // console.log(coursesData.courses);

        // console.log(teacher['name'])
        document.getElementById('btnDesplegable').innerHTML = teacher['name']
        document.getElementById('welcomeUser').innerHTML += ` ${teacher['name']} 🌟`

        console.log(teacher)
        const coursesContainer = document.getElementById('pCards');

        teacher.courses.forEach(teacherGroup => {
          // console.log(element.groupId);
          let course = coursesData.courses[teacherGroup.courseId];
          // console.log(course)
          let groupId = teacherGroup.groupId
          let groupsIds = course.groupIds

          // console.log(groupsIds)

          if (groupsIds.includes(groupId)) {

            const courseElement = document.createElement('div');
            courseElement.classList.add('card');

            // Crear la imagen con la clase 'card-img-top' y establecer el atributo src
            const image = document.createElement('img');
            image.classList.add('card-img-top');
            image.setAttribute('src', '../img/textura.jpg');
            image.setAttribute('alt', 'Fondo Carta');
            courseElement.appendChild(image);

            // Crear el div con la clase 'card-body'
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            courseElement.appendChild(cardBody);

            // Crear el título h5 con la clase 'card-title' y establecer el texto
            const courseTitle = document.createElement('h5');
            courseTitle.classList.add('card-title');
            courseTitle.textContent = course.courseName;
            cardBody.appendChild(courseTitle);

            // Crear el botón con la clase 'btnCard' y establecer el texto
            const button = document.createElement('button');
            button.classList.add('btnCard');
            button.textContent = 'Ver lista de estudiantes';
            button.setAttribute('onclick', `redirectToStudentsList('${groupId}')`);
            cardBody.appendChild(button);

            // Agregar el div del curso al contenedor de cursos
            coursesContainer.appendChild(courseElement);


          }

        });

      })



  })

const redirectToStudentsList = (groupId) => {
  localStorage.setItem('groupId',groupId)
  window.location.href = 'students-list.html';
}


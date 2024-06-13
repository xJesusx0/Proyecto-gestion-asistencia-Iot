fetch(window.jsonRoutes.teachersData)
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo leer el archivo JSON')
    }

    return response.json();
  })

  .then(data => {
    for (let i = 0; i < data.length; i++) {

      teacher = data[i]

      if (teacher['name'] === localStorage.getItem('username')) {
        break
      }

    }

    console.log(teacher['name'])
    document.getElementById('btnDesplegable').innerHTML = teacher['name']
    document.getElementById('welcomeUser').innerHTML += ` ${teacher['name']} 🌟`

    console.log(teacher)
    const coursesContainer = document.getElementById('pCards');

    teacher.courses.forEach(course => {
      // Crear el elemento div con la clase 'card'
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
      courseTitle.textContent = course.course;
      cardBody.appendChild(courseTitle);

      // Crear el botón con la clase 'btnCard' y establecer el texto
      const button = document.createElement('button');
      button.classList.add('btnCard');
      button.textContent = 'Ver lista de estudiantes';
      button.setAttribute('onclick', `mostrarModal(${JSON.stringify(course.students)})`);
      cardBody.appendChild(button);

      // Agregar el div del curso al contenedor de cursos
      coursesContainer.appendChild(courseElement);
    });

  })




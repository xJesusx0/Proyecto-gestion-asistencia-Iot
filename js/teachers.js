fetch('../json/teachers.json')
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
    const coursesContainer = document.getElementById('coursesContainer')
      teacher.courses.forEach(course => {
        
        const courseElement = document.createElement('div')
        courseElement.classList.add('card')

        const image = document.createElement('img')

        image.classList.add('card-img-top')
        image.setAttribute('src',"../img/textura.jpg")
        courseElement.appendChild(image);

        const courseTitle = document.createElement('h3')
        
        courseTitle.classList.add('courseTitle')
        courseTitle.innerHTML = `Materia: ${course.course}`
        courseElement.appendChild(courseTitle);

        const studentsList = document.createElement('input')
        
        studentsList.classList.add('studentsList')
        studentsList.setAttribute('type','button')
        studentsList.setAttribute('value','Ver lista de estudiantes')
        studentsList.setAttribute('onclick', `mostrarModal(${JSON.stringify(course.students)})`);
        
        courseElement.appendChild(studentsList);
        coursesContainer.appendChild(courseElement);
      })
  })




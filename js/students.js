fetch('../json/students.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo leer el archivo JSON')
    }

    return response.json();
  })

  .then(data => {
    for (let i = 0; i < data.length; i++) {

      student = data[i]

      if (student['name'] === localStorage.getItem('username')) {
        break
      }

    }

    console.log(student['name'])
    document.getElementById('btnDesplegable').innerHTML = student['name']
    document.getElementById('welcomeUser').innerHTML += ` ${student['name']} 🌟`

    //Ejemplos
    //document.getElementById('cuatrimestre').innerHTML = student['period']
    //document.getElementById('carrera').innerHTML = student['program']

  })




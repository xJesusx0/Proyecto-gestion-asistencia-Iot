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
    document.getElementById('welcomeData').innerHTML += `${student['program']} <br> Cuatrimestre No ${student['period']} `
    materias = student['courses']
    
    botonValido = ``
    
    for (let j = 0; j < materias.length; j++) {
      (materias[j].fails == 0) ? botonValido = `id="disabled-link" onclick="return false;"`: botonValido = ``
      document.getElementById('pCards').innerHTML += `
      <div class="card">
      <img src="../img/textura.jpg" class="card-img-top" alt="Fondo Carta">
      <div class="card-body">
      <h5 class="card-title">${materias[j].course}</h5>
      <p class="card-text">No de inasistencias: ${materias[j].fails}</p>
      <a href="#" class="btnCard" ${botonValido}>Justificar</a>
      </div>
      </div>`
      
    }

  })




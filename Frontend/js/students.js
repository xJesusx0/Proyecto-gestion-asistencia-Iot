const redirectToAttendancesList = (groupId) => {
  
  localStorage.setItem('groupData',groupId)
  window.location.href = 'history.html';
}


fetch(window.jsonRoutes.studentsData)
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo leer el archivo JSON')
    }

    return response.json();
  })

  .then(data => {

    data = data['0']

    const userId = userData.userId;
    console.log(userData.username)

    console.log(userId);
    console.log(data);
    student = data[userId];

    console.log(student['name'])
    document.getElementById('btnDesplegable').innerHTML = student['name']
    document.getElementById('welcomeUser').innerHTML += ` ${student['name']} 🌟`
    document.getElementById('program-container').innerHTML = `Programa: ${student['program']}`
    document.getElementById('period-container').innerHTML =  `Cuatrimestre: ${student['period']} `
    materias = student['courses']

    botonValido = ``

    for (let j = 0; j < materias.length; j++) {
      // (materias[j].fails == 0) ? botonValido = `id="disabled-link" onclick="return false;"` : botonValido = ``
      document.getElementById('pCards').innerHTML += `
      <div class="card">
        <img src="../img/textura.jpg" class="card-img-top" alt="Fondo Carta">
        <div class="card-body">
          <h5 class="card-title">${materias[j].course}</h5>
          <p class="card-text">No de inasistencias: ${materias[j].fails}</p>
          <input type="button" value="Ver historial" class="btnCard" onclick="redirectToAttendancesList('${materias[j].groupId}')">
        </div>
      </div>`

    }

  })




const redirectToAttendancesList = (groupId) => {
  localStorage.setItem('groupData', groupId)
  window.location.href = 'history.html';
}
const id = userData.userId;

request(window.jsonRoutes.studentsData)
  .then(studentsData => {
    console.log(studentsData)
    let student = studentsData.filter(studentsData => studentsData.id_estudiante === id);
    student = student[0]
    document.getElementById('btnDesplegable').innerHTML = userData.nombres
    document.getElementById('welcomeUser').innerHTML += ` ${userData.nombres} 🌟`
    document.getElementById('program-container').innerHTML = `Programa: ${student.programa}`
    document.getElementById('period-container').innerHTML = `Cuatrimestre: ${student.cuatrimestre} `

  });
request(window.jsonRoutes.registrationsData)
  .then(registrationsData => {
    console.log(registrationsData)
    const studentRegistrations = registrationsData.filter(registrations => registrations.id_estudiante === id);
    
    const cardsContainer = document.getElementById('cards-container');
    
    studentRegistrations.forEach(registration => {
      const card = document.createElement('div')
      card.classList.add('card');

      const img = document.createElement('img');
      img.classList.add('card-img-top');
      img.setAttribute('src','../img/textura.jpg')
      card.appendChild(img);

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      card.appendChild(cardBody)

      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title')
      cardTitle.textContent = registration.modulo;
      card.appendChild(cardTitle);

      const button = document.createElement('input');
      button.classList.add('btnCard');
      button.setAttribute('onclick',`redirectToAttendancesList('${registration.id_grupo}')`)
      button.setAttribute('type','button');
      button.setAttribute('value','Ver historial')
      card.appendChild(button)

      cardsContainer.appendChild(card)
    });
  })
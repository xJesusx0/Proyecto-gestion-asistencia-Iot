const nombreUsuario = localStorage.getItem('username');
// fetch('../json/users_data.json')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('No se pudo leer el archivo JSON')
//       }return response.json();})
//     .then (data => {
//         console.log(data);
        
//     })
fetch('../json/users_data.json')
.then(response => {
  if (!response.ok) {
    throw new Error('No se pudo leer el archivo JSON')
  }return response.json();})
.then (data => {
    for (let i = 0; i < data.length; i++) {
        if (nombreUsuario == data[i].username) {
          document.getElementById('welcomeData').innerHTML = `${data[i].program} <br> Cuatrimestre No ${data[i].period}`
            break
          }   
    } 
})

window.addEventListener('load', function() {
    document.getElementById('btnDesplegable').innerHTML = nombreUsuario
    document.getElementById('welcomeUser').innerHTML += ` ${nombreUsuario} 🌟`
});
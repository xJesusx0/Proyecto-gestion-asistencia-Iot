window.addEventListener('pageshow', function (event) {
  try {
    let storedData = localStorage.getItem('userData');
    let userData = JSON.parse(storedData);
    console.log(userData);

    if (userData && userData.loggedIn === 'true') {
      let role = userData.role;
      window.location.href = window.routes[role][0];
    }
  } catch (error) {
    console.error('Error al recuperar datos de localStorage:', error);
  }
});

const validarDatos = () => {
  request(window.jsonRoutes.usersData)

    .then(usersData => {
      let correo = document.getElementById("username").value.toLowerCase()
      correo = correo.replace(/\s+/g, '')

      const contraseña = document.getElementById("password").value
      for (let i = 0; i < usersData.length; i++) {
        let user = usersData[i];

        if (correo == user.correo && contraseña === user.contraseña) {

          window.userId = user.id;

          alert(`Bienvenido de nuevo, ${user.nombres} 👋`)

          const userData = {
            'nombres': user.nombres,
            'apellido': user.apellidos,
            'role': user.roles,
            'loggedIn': 'true',
            'userId': user.id_usuario
          }

          localStorage.setItem('userData', JSON.stringify(userData))

          window.location.href = window.routes[user.roles][0]
          return
        }
      }

      alert("usuario o contraseña invalido")

    })
    .catch(error => {
      console.error('Error al leer el archivo:', error)
    });
}

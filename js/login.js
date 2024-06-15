try{
  if (userData.loggedIn === 'true') {
    let role = userData.role;
    window.location.href = window.routes[role][0];
  }
}  catch (error) {
  
}


const validarDatos = () => {

  console.log(window.jsonRoutes)

  fetch(window.jsonRoutes.usersData)
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo leer el archivo JSON')
      }
      return response.json();
    })

    .then(data => {
      let username = document.getElementById("username").value.toLowerCase()
      username = username.replace(/\s+/g, '')

      const password = document.getElementById("password").value
      const selectedRole = document.querySelector('input[name="role"]:checked').value

      for (let i = 0; i < data.length; i++) {
        let element = data[i];

        if (username == element.username && password === element.password) {

          if (selectedRole !== element.role) {
            alert("Rol incorrecto")
            return
          }
          window.userId = element.id;

          alert(`Bienvenido de nuevo, ${username} 👋`)

          const userData = {
            'username':username,
            'role':selectedRole,
            'loggedIn':'true',
            'userId':element.id

          }
          localStorage.setItem('userData',JSON.stringify(userData))
          
          window.location.href = window.routes[selectedRole][0]
          return
        }
      }

      alert("usuario o contraseña invalido")

    })
    .catch(error => {
      console.error('Error al leer el archivo JSON:', error)
    });
}

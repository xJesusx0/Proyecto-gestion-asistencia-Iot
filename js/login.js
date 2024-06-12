if (localStorage.getItem('loggedIn') === 'true') {
  role = localStorage.getItem('role')

  window.location.href = window.routes[role]
}


const validarDatos = () => {
  fetch('../json/users_data.json')
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
          alert(`Bienvenido denuevo, ${username} 👋`)


          localStorage.setItem('loggedIn', 'true')
          localStorage.setItem('username', username)
          localStorage.setItem('role', selectedRole)

          window.location.href = window.routes[selectedRole]
          return
        }
      }

      alert("usuario o contraseña invalido")

    })
    .catch(error => {
      console.error('Error al leer el archivo JSON:', error)
    });
}
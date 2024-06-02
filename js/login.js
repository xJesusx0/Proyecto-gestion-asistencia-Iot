const validarDatos = () => {
  fetch('json/datos.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo leer el archivo JSON')
      }
      return response.json();
    })

    .then(data => {
      username = document.getElementById("username").value
      password = document.getElementById("password").value

      console.log(username)
      console.log(password)

      for (let i = 0; i < data.length; i++) {
        let element = data[i];

        console.log(`Nombre: ${element.username}`)
        console.log(`password: ${element.password}`)

        if (username === element.username && password === element.password) {
          alert("Usuario valido")
          
          localStorage.setItem('loggedIn', 'true')
          localStorage.setItem('username',username)

          window.location.href = 'html/index.html'
          return
        }
      }

      alert("username invalido")

    })
    .catch(error => {
      console.error('Error al leer el archivo JSON:', error)
    });
}
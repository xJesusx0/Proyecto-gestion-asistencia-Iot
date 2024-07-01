window.addEventListener('pageshow', function(event) {
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

const csvTextToJson = (csvText) => {
  // Eliminar cualquier caracter de retorno de carro adicional que pueda interferir
  const formattedCsv = csvText.replace(/\r/g, '');

  // Separar las líneas del CSV
  const lines = formattedCsv.split('\n');

  // Obtener los encabezados (primera línea del CSV)
  const headers = lines[0].split(',');

  const jsonArray = [];

  // Recorrer cada línea del CSV (empezando desde la segunda línea)
  for (let i = 1; i < lines.length; i++) {
    const json = {};
    const currentLine = lines[i].split(',');

    // Asignar cada valor al encabezado correspondiente
    for (let j = 0; j < headers.length; j++) {
      json[headers[j]] = currentLine[j];
    }

    jsonArray.push(json);
  }

  return (jsonArray);
}

const validarDatos = () => {

  console.log(window.jsonRoutes)

  fetch(window.jsonRoutes.usersData)
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo leer el archivo JSON')
      }
      return response.text();
    })

    .then(data => {
      console.log(data)
      const jsonData = csvTextToJson(data);
      let correo = document.getElementById("username").value.toLowerCase()
      correo = correo.replace(/\s+/g, '')

      const contraseña = document.getElementById("password").value
      const selectedRole = document.querySelector('input[name="role"]:checked').value
      console.log(selectedRole)
      for (let i = 0; i < jsonData.length; i++) {
        let element = jsonData[i];

        if (correo == element.correo && contraseña === element.contraseña) {

          if (selectedRole !== element.roles) {
            alert("Rol incorrecto")
            return
          }
          window.userId = element.id;

          alert(`Bienvenido de nuevo, ${correo} 👋`)

          const userData = {
            'correo': correo,
            'role': selectedRole,
            'loggedIn': 'true',
            'userId': element.id

          }
          localStorage.setItem('userData', JSON.stringify(userData))

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

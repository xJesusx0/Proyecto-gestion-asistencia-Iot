window.addEventListener('pageshow', function (event) {
  try {
    let storedData = localStorage.getItem('userData');
    let userData = JSON.parse(storedData);
    console.log(userData);

    if (userData && userData.loggedIn === 'true') {
      let role = userData.role;
      window.location.href = window.routes[role][0];
    }

    const loginForm = document.getElementById('login-form');
    loginForm.setAttribute('action',`${config.baseUrl}/auth/login`)

  } catch (error) {
    console.error('Error al recuperar datos de localStorage:', error);
  }
});

const validarLogin = () => {
  
  const username = document.getElementById("username").value.toLowerCase().trim();
  const password = document.getElementById("password").value;
  const selectedRole = document.querySelector('input[name="role"]:checked').value;

  // Verificar si los campos están vacíos
  if (!username || !password || !selectedRole) {
    alert('Por favor completa todos los campos.');
    return;
  }


  // Datos que se enviaran en la peticion
  const baseUrl = config.baseUrl
  const url = `${baseUrl}/auth/login`
  const data = {
    'username': username,
    'password': password,
    'role': selectedRole
  };

  console.log(selectedRole)

  request('POST', url, data)
    .then(data => {
      console.log('Respuesta del servidor:', data);

      if (data['error']) {
        alert(data['error']);
        return;
      }


      const userData = {
        'username': username,
        'role': selectedRole,
        'loggedIn': 'true',
        'userId': data['id_usuario']

      }

      alert(`Bienvenido de nuevo, ${username} 👋`);

      localStorage.setItem('userData', JSON.stringify(userData))
      window.location.href = window.routes[selectedRole][0]
      return
    })

    .catch(error => {
      console.error('Error:',error);
    });
}
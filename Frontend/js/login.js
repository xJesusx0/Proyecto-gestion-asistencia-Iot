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
    loginForm.setAttribute('action', `${config.baseUrl}/auth/login`)

  } catch (error) {
    console.error('Error al recuperar datos de localStorage:', error);
  }
});

const validarLogin = () => {
  const username = document.getElementById("username").value.toLowerCase().trim();
  const password = document.getElementById("password").value;

  // Validar que ambos campos estén completos y realizar más validaciones si es necesario
  if (!username || !password) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const baseUrl = config.baseUrl;
  const url = `${baseUrl}/auth/login`;

  const data = {
    'username': username,
    'password': password,
  };

  request('POST', url, data)
    .then(data => {
      console.log('Respuesta del servidor:', data);

      if (data['error']) {
        alert(data['error']);
        return;
      }

      const roles = data['roles'];

      if (roles.length !== 1) {
        // Lógica para manejar múltiples roles, podría incluir la apertura de un modal
      }

      const role = roles[0]['nombre'].toLowerCase();
      console.log(role);
      const userData = {
        'names': data['user-data']['nombres'],
        'role': role,
        'loggedIn': 'true',
        'userId': data['user-data']['id_usuario']
      };

      alert(`Bienvenido de nuevo, ${username} 👋`);

      localStorage.setItem('userData', JSON.stringify(userData));
      window.location.href = window.routes[role][0];
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    });
};

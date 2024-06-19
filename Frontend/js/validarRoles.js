

// console.log(route)
// console.log(window.routes[role])
// console.log(`rol: ${userData.role}`)
// console.log(role === userData.role)

window.addEventListener('pageshow', function (event) {
    let storedData = localStorage.getItem('userData');
    let userData = JSON.parse(storedData);
    
    const route = window.location.pathname.split('/').pop()
    const role = userData.role
    if (!window.routes[role]) {
        alert("estas intentando acceder con un rol invalido")
        localStorage.clear()
        window.location.href = 'login.html'
    }

    if (!window.routes[role].includes(route)) {
        alert("No tienes permitido el acceso a esta pagina")
        window.location.href = window.routes[role][0]
    }
});





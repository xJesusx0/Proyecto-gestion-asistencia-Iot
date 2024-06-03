const nombreUsuario = localStorage.getItem('username');

window.addEventListener('load', function() {
    document.getElementById('btnDesplegable').innerHTML = nombreUsuario
    document.getElementById('welcomeUser').innerHTML += ` ${nombreUsuario} 🌟`
    document.getElementById('welcomeData').innerHTML = `` 
});
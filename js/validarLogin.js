
// if (userData.userId !== id){
//     localStorage.removeItem('userData');
//     window.location.href = 'login.html';
// }
window.addEventListener('pageshow', function (event) {
    try {
        let storedData = localStorage.getItem('userData');
        let userData = JSON.parse(storedData);
        let loggedIn = userData.loggedIn;
        
        console.log(loggedIn)
        if (loggedIn !== 'true') {
            localStorage.removeItem('userData');
            window.location.href = 'login.html';
        }

    } catch (error) {
        localStorage.removeItem('userData');
        window.location.href = 'login.html';
    }
});




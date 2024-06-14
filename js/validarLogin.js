
// if (userData.userId !== id){
//     localStorage.removeItem('userData');
//     window.location.href = 'login.html';
// }

try {
    let loggedIn = userData.loggedIn;

    if (loggedIn !== 'true') {
        window.location.href = 'login.html';
    }

} catch (error) {
    localStorage.removeItem('userData');
    window.location.href = 'login.html';
}

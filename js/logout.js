const logout = () => {
    localStorage.removeItem('userData')
    window.location.href = 'login.html'
}
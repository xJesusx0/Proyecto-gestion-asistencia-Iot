const logout = () => {
    localStorage.removeItem('userData')
    localStorage.removeItem('selectedGroup')
    window.location.href = 'login.html'
}
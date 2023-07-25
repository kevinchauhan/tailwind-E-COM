function logout(){
    localStorage.removeItem('curr_user')
    location.href = '../index.html'
}
// for other pages
function authenticate(){
    const currUser = JSON.parse(localStorage.getItem('curr_user'))
    if(currUser){
        document.querySelector('#user-name').innerHTML = `<button>${currUser.personalData.name}<i class="ri-arrow-down-s-line"></i></button>`
        cartCounting(currUser.personalData.id)
    } else{
        location.href = '../index.html'
    }
}  

// for login and signup page
function auth(url){
    const currUser = JSON.parse(localStorage.getItem('curr_user'))
    if(currUser){
        window.location.href = url
    } 
}  
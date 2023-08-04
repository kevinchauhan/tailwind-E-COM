// getting form data and validating
const signupForm = document.signup
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = signupForm.name
    const userEmail = signupForm.email
    const userPassword = signupForm.password
    const errorMsg = document.querySelectorAll('.error-msg')

    // validating form inputs
    let nameError = true
    let emailError = true
    let passError = true

    if (userName.value === '') {
        errorMsg[0].innerHTML = 'please enter name'
        nameError = true
    } else {
        errorMsg[0].innerHTML = ''
        nameError = false
    }

    if (userEmail.value === '') {
        errorMsg[1].innerHTML = 'please enter valid email'
        emailError = true
    } else {
        errorMsg[1].innerHTML = ''
        emailError = false
    }

    if (userPassword.value === '') {
        errorMsg[2].innerHTML = 'please enter password'
        passError = true
    } else {
        errorMsg[2].innerHTML = ''
        passError = false
    }

    if (!nameError && !emailError && !passError) {
        const date = new Date()
        const userMarkup = {
            personalData: {
                id: date.getTime(),
                name: userName.value,
                email: userEmail.value,
                password: userPassword.value
            }
        }

        registerUser(userMarkup) // register function called...
    }

})

//  Registering new user
function registerUser(userMarkup) {
    const localUserData = JSON.parse(localStorage.getItem('users_data'))
    if (localUserData) {
        const checkEmail = localUserData.some(e => {
            if (e.personalData.email === userMarkup.personalData.email) {
                return true
            }
        })
        if (checkEmail) {
            document.querySelector('#email-check').innerHTML = 'Email already exists'
        } else {
            localUserData.push(userMarkup)
            localStorage.setItem('users_data', JSON.stringify(localUserData))
            success()
        }
    } else {
        localStorage.setItem('users_data', JSON.stringify([userMarkup]))
        success()
    }

}

// alert msg
function success() {
    const alertMsg = document.querySelector('#alert-msg')
    alertMsg.classList.add('active')
    counting()
}

// redirecting counter
let count = 5
function counting() {
    const loginCounter = document.querySelector('#login-counter').innerText = count
    console.log(count)
    count--

    if (count >= 0) {
        setTimeout(() => {
            counting()
        }, 1000);
    }

    if (count < 0) {
        window.location.href = '../index.html'
    }
}

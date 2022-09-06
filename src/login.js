function loginScreen() {
    canvas.style = 'display = none';
    document.getElementById('start').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('login-screen').style.display = 'none';
    let loginInput = document.getElementsByClassName('login-input')
    for (let i = 0; i < loginInput.length; i++) {
        loginInput[i].style.display = 'block';
        
    }
}

function login() {
    let emailElement = document.getElementById("email");
    let passwordElement = document.getElementById("password");
    let email = emailElement.value;
    let password = passwordElement.value;
    emailElement.value = '';
    passwordElement.value = '';
}
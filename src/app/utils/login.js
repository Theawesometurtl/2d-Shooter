import { globals, canvas } from '../globals.js';
import { createUser, loginUser } from './firebaseUtils/createUser.js';
import { toMenu } from '../toMenu.js';
import { setUserInfo } from './firebaseUtils/setUserInfo.js';
import { updateCurrentUser } from 'firebase/auth';



export function loginScreen() {
    canvas.style = 'display = none';
    document.getElementById('start').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('login-screen').style.display = 'none';
    let loginInput = document.getElementsByClassName('login-input')
    for (let i = 0; i < loginInput.length; i++) {
        loginInput[i].style.display = 'block';
        
    }
}

export function signUp() {
  let nameElement = document.getElementById("name");
  let emailElement = document.getElementById("email");
  let passwordElement = document.getElementById("password");
  let name = nameElement.value;
  let email = emailElement.value;
  let password = passwordElement.value;
  
  emailElement.value = '';
  passwordElement.value = '';
  createUser(email, password);
  globals.uid = firebase.auth().currentUser.uid;
  setUserInfo('name', name);
}

export function login() {
    let nameElement = document.getElementById("name");
    let emailElement = document.getElementById("email");
    let passwordElement = document.getElementById("password");
    let name = nameElement.value;
    let email = emailElement.value;
    let password = passwordElement.value;
    
    emailElement.value = '';
    passwordElement.value = '';
    loginUser(email, password);
    getCurrentUser();

}
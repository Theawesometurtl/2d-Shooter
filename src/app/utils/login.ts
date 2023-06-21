import { globals, canvas } from '../../sharedGlobals';
import { createUser, loginUser } from './firebaseUtils/createUser';
import { toMenu } from '../toMenu.js';
import { setUserInfo } from './firebaseUtils/setUserInfo';
import { auth, db } from './firebaseUtils/initializeFirebase';
import { ref } from 'firebase/database';



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
    let nameElement = document.getElementById("nameInput");
    let emailElement = document.getElementById("email");
    let passwordElement = document.getElementById("password");
    globals.username = nameElement.value;
    let email = emailElement.value;
    let password = passwordElement.value;

    emailElement.value = '';
    passwordElement.value = '';
    nameElement.value = '';
    createUser(email, password)



    
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

    const user = auth.currentUser;
    if (user !== null) {
    globals.uid = user.uid;
    let r = ref(db, 'users/' + globals.uid + '/highscore')
    if (r !== null && r > globals.highscore) {
        globals.highscore = r;
        console.log(r);
        document.getElementById('highscore').innerHTML = globals.highscore;
    }
      toMenu();
    
    }
}
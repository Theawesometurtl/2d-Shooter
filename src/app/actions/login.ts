import { globals, canvas } from '../../sharedGlobals';
import { createUser, loginUser } from './firebaseUtils/createUser';
import { toMenu } from './toMenu';
import { setUserInfo } from './firebaseUtils/setUserInfo';
import { auth, db } from './firebaseUtils/initializeFirebase';
import { ref, get } from 'firebase/database';



export function loginScreen() {
    document.getElementById('canvas').style.display = 'none';
    document.getElementById('start').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('login-screen').style.display = 'none';
    let loginInput = Array.from(document.getElementsByClassName('login-input')) as HTMLInputElement[];
    for (let i = 0; i < loginInput.length; i++) {
        loginInput[i].style.display = 'block';
        
    }
}

export function signUp() {
    let nameElement: HTMLInputElement = document.getElementById("nameInput") as HTMLInputElement;
    let emailElement: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
    let passwordElement: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
    globals.username = nameElement.value;
    let email = emailElement.value;
    let password = passwordElement.value;

    emailElement.value = '';
    passwordElement.value = '';
    nameElement.value = '';
    createUser(email, password)



    
}

export function login() {
    let nameElement: HTMLInputElement = document.getElementById("nameInput") as HTMLInputElement;
    let emailElement: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
    let passwordElement: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
    let name = nameElement.value;
    let email = emailElement.value;
    let password = passwordElement.value;
    
    emailElement.value = '';
    passwordElement.value = '';
    loginUser(email, password);

    const user = auth.currentUser;
    if (user !== null) {
        globals.uid = user.uid;
        let r = ref(db, 'users/' + globals.uid + '/highscore');
        get(r).then((snapshot) => {
            const value = snapshot.val();
            if (value !== null && value > globals.highscore) {
                globals.highscore = value;
                console.log(value);
                document.getElementById('highscore').innerHTML = String(globals.highscore);
            }
        });
        toMenu();
        
    }
}
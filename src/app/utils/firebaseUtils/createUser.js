import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from './initializeFirebase.js';

export function createUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    /*.catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });*/
}

export function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    /*
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });*/
}



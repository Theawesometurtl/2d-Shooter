import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from './initializeFirebase.js';
import { globals } from "../../globals.js";

export function createUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then(function(result) {
        updateProfile(auth.currentUser, {
            displayName: globals.username
          })
      }).catch(function(error) {
        console.log(error);
      });
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



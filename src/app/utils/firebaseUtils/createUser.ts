import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from './initializeFirebase';
import { globals } from "../../../sharedGlobals";

export function createUser(email: string, password: string): void {
    createUserWithEmailAndPassword(auth, email, password)
    .then(function(result) {
        updateProfile(auth.currentUser, {
            displayName: globals.username
          })
      }).catch(function(error) {
        console.log(error);
      });
}

export function loginUser(email: string, password: string): void {
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



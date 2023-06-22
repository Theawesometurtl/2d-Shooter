import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";//why did I decide to add all this?
import { getAnalytics } from "firebase/analytics";
import { globals } from '../../../sharedGlobals';
import { toMenu } from '../toMenu';

const firebaseConfig = {
    apiKey: "AIzaSyAAkPI-g8MRhzDjupHlZ-NOvRLDV4j8vxk",
    authDomain: "d-shooter-4f1cc.firebaseapp.com",
    databaseURL: "https://d-shooter-4f1cc-default-rtdb.firebaseio.com",
    projectId: "d-shooter-4f1cc",
    storageBucket: "d-shooter-4f1cc.appspot.com",
    messagingSenderId: "124296778100",
    appId: "1:124296778100:web:594d5cc09878b016ec9c21",
    measurementId: "G-KZ55MXP4ES"
    };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        globals.uid = user.uid;
        console.log(globals.uid);
        toMenu();
        let name = user.displayName;
        console.log(name);
        if (name === undefined && globals.username !== undefined) {
        name = globals.username; 
        } else if (name === undefined && globals.username === undefined) {
            name = 'Annonymous User';
        }
        
        let nameElement = document.getElementById('name');
        nameElement.style.display = 'block';
        nameElement.innerHTML = name;
        //setUserInfo('name', name);

    } else {
        // User is signed out
    }
    });
        


export {auth, db};
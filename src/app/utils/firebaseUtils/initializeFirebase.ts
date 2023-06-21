import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";//why did I decide to add all this?
import { getAnalytics } from "firebase/analytics";

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

export {auth, db};
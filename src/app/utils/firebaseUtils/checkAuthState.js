import { globals } from '../../globals';
import { auth, db } from './initializeFirebase'
import { onAuthStateChanged } from 'firebase/auth';
import { ref } from 'firebase/database';
import { toMenu } from '../../toMenu';


onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      globals.uid = user.uid;
      console.log(globals.uid);
      toMenu();
      let name = ref(db, 'users/' + globals.uid + 'name');
      let nameElement = document.getElementById('name');
      nameElement.style.display = 'block';
      nameElement.innerHTML = name;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
import { set, ref } from 'firebase/database';
import { db } from "./initializeFirebase.js";
import { globals } from "../../globals";

export function setUserInfo(key, value) {
    console.log(globals.uid, key, value);
    if (globals.uid !== undefined && value !== undefined && key !== undefined) {
      set(ref(db, 'users/' + globals.uid), {
          [key]: value
        });
    }
  }
  
  
  
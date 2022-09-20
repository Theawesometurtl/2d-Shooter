import { set, ref } from 'firebase/database';
import { db } from "./login";
import { globals } from "../globals";

export function setUserInfo(key, value) {
    console.log(globals.uid, key, value);
    if (globals.uid !== undefined && value !== undefined && key !== undefined) {
      console.log('hi')
      set(ref(db, 'users/' + globals.uid), {
          [key]: value
        });
    }
  }
  
  
  
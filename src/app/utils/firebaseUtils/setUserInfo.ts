import { set, ref } from 'firebase/database';
import { db } from "./initializeFirebase";
import { globals } from "../../../sharedGlobals";

export function setUserInfo(key: string, value: string): void {
    console.log(globals.uid, key, value);
    if (globals.uid !== undefined && value !== undefined && key !== undefined) {
      set(ref(db, 'users/' + globals.uid), {
          [key]: value
        });
    }
  }
  
  
  
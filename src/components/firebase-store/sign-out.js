import { app } from "./keys";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

export const exit = () =>{
        signOut(auth).then(() => {
            console.log('Cerraste sesión')
             // Sign-out successful.
            }).catch((error) => {
  // An error happened.
            });
    }
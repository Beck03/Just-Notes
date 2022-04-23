/*import {
     getAuth,
     GoogleAuthProvider,
     signInWithPopup,
} from './keys';
export const proveedor = new GoogleAuthProvider();
export function google() {
    const auth = getAuth();
    signInWithPopup(auth, proveedor)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // eslint-disable-next-line no-unused-vars
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
       // onNavigate('/muro'); aqui va a donde se va a dirigir
        // ...
      // eslint-disable-next-line no-unused-vars
      }).catch((error) => {
        // Handle Errors here.
        // The email of the user's account used.
        // The AuthCredential type that was used.
        // eslint-disable-next-line no-unused-vars
        // ...
      });
  }
  export function datos() {
    const auth = getAuth();
    const user = auth.currentUser;
    let datosUsuario = {};
    if (user !== null) {
      datosUsuario = {
        nombre: user.displayName,
        fotoUsuario: user.photoURL,
        verificado: user.emailVerified,
        emailUsuario: user.email,
        uidUsuario: user.uid,
      };
    }
    return datosUsuario;
}*/
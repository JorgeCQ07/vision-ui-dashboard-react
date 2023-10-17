import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../data/firebaseConfig";


export function useAuth() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            return true;
            // ...
        } else {
            // User is signed out
            return null;
            // ...
        }
    });
}

export async function signUp(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

// export async function signOut() {
//     try {
//         await firebaseSignOut(auth);
//         alert("Signed out");
//         return true;
//     } catch (error) {
//         alert(error.message);
//         return false;
//     }
// }
export const signOut = () => {
    auth.signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
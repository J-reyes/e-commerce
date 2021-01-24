import firebase from 'firebase/app';
// db
import 'firebase/firestore';
// auth
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDklXQunICWW6h5wQXpdGohyGpyE1jdZiY",
    authDomain: "commerce-db-7cdab.firebaseapp.com",
    projectId: "commerce-db-7cdab",
    storageBucket: "commerce-db-7cdab.appspot.com",
    messagingSenderId: "282261706629",
    appId: "1:282261706629:web:20f5b45134127c73f6d6ec",
    measurementId: "G-CBCLVR5BP5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
// take provider as arg
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
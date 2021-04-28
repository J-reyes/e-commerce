import firebase from "firebase/app";
// db
import "firebase/firestore";
// auth
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDklXQunICWW6h5wQXpdGohyGpyE1jdZiY",
  authDomain: "commerce-db-7cdab.firebaseapp.com",
  projectId: "commerce-db-7cdab",
  storageBucket: "commerce-db-7cdab.appspot.com",
  messagingSenderId: "282261706629",
  appId: "1:282261706629:web:20f5b45134127c73f6d6ec",
  measurementId: "G-CBCLVR5BP5",
};

// API request - populates firebase bbut not the app's state
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if no userAuth
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  // if snapshot of user does not exist
  if (!snapShot.exists) {
    // create it
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  // incase we need to useRef again
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // create collection
  const collectionRef = firestore.collection(collectionKey);

  // batch(group) write into one request
  // fires when all calls are done being added
  const batch = firestore.batch();
  // does not return a new away like .map()
  objectsToAdd.forEach((obj) => {
    // get document at an empty string
    // so new doc - creates a key
    const newDocRef = collectionRef.doc();
    // pass ref & value
    batch.set(newDocRef, obj);
  });

  // returns a promise
  return await batch.commit();
};

// gets the whole snapshot object
export const convertCollectinosSnapshotToMap = (collections) => {
  // return the right object
  // .doc gives us our query snapshot array
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      // pass a string into encode
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    // set key = to collection
    // {hats: [{hhats collection}]}
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

// google auth
export const auth = firebase.auth();
// db
export const firestore = firebase.firestore();

// google auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
// take provider as arg
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;

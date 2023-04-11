import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB1k-Jzbmnv0sefxvW7qXudmh-R7fdrncU",
  authDomain: "e-com-2e81b.firebaseapp.com",
  projectId: "e-com-2e81b",
  storageBucket: "e-com-2e81b.appspot.com",
  messagingSenderId: "928518344484",
  appId: "1:928518344484:web:0451811c5372d5901dedb1",
  measurementId: "G-5GCYTV6ZFT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

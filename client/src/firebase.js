import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCQqCGzQ4eEN-dECi6CWenMQUADG-g1EOM",
  authDomain: "ecommerce-e2482.firebaseapp.com",
  projectId: "ecommerce-e2482",
  storageBucket: "ecommerce-e2482.appspot.com",
  messagingSenderId: "46428550931",
  appId: "1:46428550931:web:eb3cc825ea070fd1ca4ce6",
  measurementId: "G-QWWG8KSQ5J",
};
const fireabseApp = firebase.initializeApp(firebaseConfig);
const db = fireabseApp.firestore();
var provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export { provider, auth, db };

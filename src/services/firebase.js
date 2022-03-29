import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzKlYp1Q4-mJEepOqMf6PidPiz6y718zQ",
  authDomain: "auth-proworking.firebaseapp.com",
  projectId: "auth-proworking",
  storageBucket: "auth-proworking.appspot.com",
  messagingSenderId: "80830929381",
  appId: "1:80830929381:web:2d4d637e01b2f82f98770c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { firebase, auth, app };

import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBo-YA6QAC7qaNfoKZHFzgLj5imVdJCPcw",
  authDomain: "savecardnote.firebaseapp.com",
  projectId: "savecardnote",
  storageBucket: "savecardnote.appspot.com",
  messagingSenderId: "116913447979",
  appId: "1:116913447979:web:b13e90896aff7d6977b66e",
});

export const auth = app.auth();
export default app;

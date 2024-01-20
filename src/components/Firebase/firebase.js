// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAca-30_XN9szmQzlAlGsUtPaa1mkOnTLs",
  authDomain: "fir-77d26.firebaseapp.com",
  projectId: "fir-77d26",
  storageBucket: "fir-77d26.appspot.com",
  messagingSenderId: "746194888497",
  appId: "1:746194888497:web:0d5665548b71513c753210",
  measurementId: "G-4PN0Y664ZF"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth};
//firebase login --reauth
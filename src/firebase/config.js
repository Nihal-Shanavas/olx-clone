import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAGp4P0zImirjSJUqsvDCIy_D1Ux-2EleQ",
    authDomain: "olx-clon-862b9.firebaseapp.com",
    projectId: "olx-clon-862b9",
    storageBucket: "olx-clon-862b9.appspot.com",
    messagingSenderId: "932353744521",
    appId: "1:932353744521:web:669ec2a83d0f30bcdcf058",
    measurementId: "G-0W9197RT22"
  };
   export default firebase.initializeApp(firebaseConfig)
  
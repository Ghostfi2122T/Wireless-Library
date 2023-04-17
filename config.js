import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCVRJX1n1w2L6GSUoX--qrHH0uAdq6JSEs",
  authDomain: "wireless-library-805a8.firebaseapp.com",
  projectId: "wireless-library-805a8",
  storageBucket: "wireless-library-805a8.appspot.com",
  messagingSenderId: "945666681506",
  appId: "1:945666681506:web:248a28d7771f22a7d645fb"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
var firebaseConfig = {
    apiKey: "AIzaSyA9cJwz_HAf5syuwk4-oV2t8lUO4FzkQ6I",
    authDomain: "apimanager-6ab81.firebaseapp.com",
    databaseURL: "https://apimanager-6ab81.firebaseio.com",
    projectId: "apimanager-6ab81",
    storageBucket: "apimanager-6ab81.appspot.com",
    messagingSenderId: "133791438496",
    appId: "1:133791438496:web:bcb51889a90150511bdbc5"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
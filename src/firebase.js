// Importation du module de firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Configuration de firebase
const firebaseConfig = {
    apiKey: "AIzaSyCHTsl8Gr3VHFqLMkQeyfKmc1XNGtBwuvk",
    authDomain: "pt4-restaurant.firebaseapp.com",
    databaseURL: "https://pt4-restaurant-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pt4-restaurant",
    storageBucket: "pt4-restaurant.appspot.com",
    messagingSenderId: "338348324693",
    appId: "1:338348324693:web:2f10cc29efd8fefe5621dc",
    measurementId: "G-E7WRVVVT14"
};

// Initialisation de firebase
firebase.initializeApp(firebaseConfig);

export default firebase
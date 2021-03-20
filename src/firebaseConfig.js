import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCzNoP022qco1P7CaGkejSl4eEx8JWYAsc",
    authDomain: "react-firebase-3e4e2.firebaseapp.com",
    projectId: "react-firebase-3e4e2",
    storageBucket: "react-firebase-3e4e2.appspot.com",
    messagingSenderId: "483222097133",
    appId: "1:483222097133:web:f7a7306176348888d750e4",
    measurementId: "G-4943T7QM93"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
//firebase.analytics();

export default { auth };
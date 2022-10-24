
const firebaseConfig = {
    apiKey: "AIzaSyB7C9nTzcYPLzBOgqI-mgPncNiq8VoyYEE",
    authDomain: "admin-ppp.firebaseapp.com",
    databaseURL: "https://admin-ppp-default-rtdb.firebaseio.com",
    projectId: "admin-ppp",
    storageBucket: "admin-ppp.appspot.com",
    messagingSenderId: "1045359328095",
    appId: "1:1045359328095:web:d082c3dc15a5c0749654ea",
    measurementId: "G-3H9EZ4V9QQ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);


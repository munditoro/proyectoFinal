import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBWNyP5zllQoOyXxkQx4exv7JiNVci4vZs",
    authDomain: "administracion-4690d.firebaseapp.com",
    databaseURL: "https://administracion-4690d.firebaseio.com",
    projectId: "administracion-4690d",
    storageBucket: "administracion-4690d.appspot.com",
    messagingSenderId: "977553169659"
 };

 firebase.initializeApp(config);

 const database = firebase.database();
 const platillos = database.ref("alimentos/");

 export default platillos;
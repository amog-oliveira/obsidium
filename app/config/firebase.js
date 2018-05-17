import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCaNqvg4fHyuj9CMqe6qnIHjKjp6JRnoUU",  
    authDomain: "aquitemassedio.firebaseapp.com",
    databaseURL: "https://aquitemassedio.firebaseio.com",
    projectId: "aquitemassedio",
    storageBucket: "aquitemassedio.appspot.com",
    messagingSenderId: "835794669970"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth, 
    firebase
}

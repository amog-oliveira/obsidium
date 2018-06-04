import * as firebase from 'firebase';
import { firebaseConfig } from './services';


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export {
    auth, 
    firebase
}

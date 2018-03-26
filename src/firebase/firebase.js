import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAILc35cy3bz7xkWD9ROvnQ0zJz_Ro5l3A",
    authDomain: "neuroschematic.firebaseapp.com",
    databaseURL: "https://neuroschematic.firebaseio.com",
    projectId: "neuroschematic",
    storageBucket: "neuroschematic.appspot.com",
    messagingSenderId: "159182127431"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
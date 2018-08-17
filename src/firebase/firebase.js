import moment from 'moment';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAkOLDowKzwHpMGrbQNl9Hm0Z3xMdZ_p_k",
    authDomain: "expensify-66257.firebaseapp.com",
    databaseURL: "https://expensify-66257.firebaseio.com",
    projectId: "expensify-66257",
    storageBucket: "expensify-66257.appspot.com",
    messagingSenderId: "499103449802"
  };

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
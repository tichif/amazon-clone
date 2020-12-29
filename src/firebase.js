import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCLZ_KsF5Np78RrKbwPz4eOGz0w5PtruWk',
  authDomain: 'clone-80446.firebaseapp.com',
  projectId: 'clone-80446',
  storageBucket: 'clone-80446.appspot.com',
  messagingSenderId: '102376365006',
  appId: '1:102376365006:web:9b1c76ae4dbc43f971699f',
  measurementId: 'G-DNK0NLVNKG',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

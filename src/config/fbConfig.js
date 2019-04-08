import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBv9k62Uu3FgQl2g1X7eBDim5faiVX3MDI',
  authDomain: 'evocrentals.firebaseapp.com',
  databaseURL: 'https://evocrentals.firebaseio.com',
  projectId: 'evocrentals',
  storageBucket: 'evocrentals.appspot.com',
  messagingSenderId: '206838482278'
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAFSLnhY6KqK4prJFYxZV1GUjr-wOxN2Wc',
  authDomain: 'petscout-7b088.firebaseapp.com',
  databaseURL: 'https://petscout-7b088.firebaseio.com',
  projectId: 'petscout-7b088',
  storageBucket: 'petscout-7b088.appspot.com'
};

// messagingSenderId: "836299440895",
//   appId: "1:836299440895:web:c65cef4ed9bbd2e16c42ca",
//   measurementId: "G-Y2LQKVTBZ5"

firebase.initializeApp(config);

export default firebase;

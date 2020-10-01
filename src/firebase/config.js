import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC-NVUj5Sz3eFPxS_RU94DjmC0gFrPNNao",
  authDomain: "image-gram-360.firebaseapp.com",
  databaseURL: "https://image-gram-360.firebaseio.com",
  projectId: "image-gram-360",
  storageBucket: "image-gram-360.appspot.com",
  messagingSenderId: "566545611225",
  appId: "1:566545611225:web:85190f9fe258e29f5b41c8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyATq733SgOlw3uX3hV2rNx8skuxm7aeppA",
  authDomain: "login-page-new-3780c.firebaseapp.com",
  projectId: "login-page-new-3780c",
  storageBucket: "login-page-new-3780c.appspot.com",
  messagingSenderId: "106026228924",
  appId: "1:106026228924:web:3e14f52a3fe928c06644b9"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

// Make Auth and Firestore available globally
const auth = firebase.auth();
const db = firebase.firestore();

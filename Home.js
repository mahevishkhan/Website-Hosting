// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMqcPq0_sW8aIyXOWY80x6vEksbXOOQA8",
  authDomain: "abp-news-d2441.firebaseapp.com",
  projectId: "abp-news-d2441",
  storageBucket: "abp-news-d2441.appspot.com",
  messagingSenderId: "760684556884",
  appId: "1:760684556884:web:4020468b808c35bba473c1",
  measurementId: "G-4XXZCK8FF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// JavaScript code to log out the user and redirect to index.html

// JavaScript code to log out the user and redirect to index.html

// Get the logout button element
const logoutButton = document.getElementById("logout");

// Add event listener to the logout button
logoutButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Sign out the user
    auth.signOut().then(() => {
        // Sign-out successful, redirect to index.html
        window.location.href = '/index.html';
    }).catch((error) => {
        // An error happened.
        console.error('Error logging out:', error);
    });
});

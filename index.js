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



const submit = document.getElementById("submit_register");
submit.addEventListener("click", function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("User Created",user)
    window.location.href = '/Home.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error:" + errorMessage)
  });

})


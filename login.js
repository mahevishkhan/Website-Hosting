// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
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



const submit = document.getElementById("submit_login");
submit.addEventListener("click", function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Redirect to the uClassify page after successful login
        window.location.href = 'https://www.uclassify.com/manage/classifiers/sentiment-analysis-for-news-article?input=Text';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle login error
        console.error(errorCode, errorMessage);
    });
});

const fetch = document.getElementById("fetch")
        fetch.addEventListener("click", function () {
            window.location.href = './forget.html';
        })

        



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMqcPq0_sW8aIyXOWY80x6vEksbXOOQA8",
  authDomain: "abp-news-d2441.firebaseapp.com",
  projectId: "abp-news-d2441",
  storageBucket: "abp-news-d2441.appspot.com",
  messagingSenderId: "760684556884",
  appId: "1:760684556884:web:4020468b808c35bba473c1",
  measurementId: "G-4XXZCK8FF9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById("submit_forget");
submit.addEventListener("click", function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;

    // Validate email format
    if (!validateEmail(email)) {
        console.error("Invalid email format.");
        return;
    }

    // Send password reset email
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Email sent successfully
            alert("Password reset email sent. Check your inbox for further instructions.");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        });
});

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

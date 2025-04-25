// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwge86n1dhWPjwYjIzbCMRC1YGqRMjjbI",
    authDomain: "login-with-firebase-3df3a.firebaseapp.com",
    projectId: "login-with-firebase-3df3a",
    storageBucket: "login-with-firebase-3df3a.appspot.com",
    messagingSenderId: "1090275122630",
    appId: "1:1090275122630:web:65fc895228f2ae62aca6c7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Authentication
const auth = firebase.auth();

// Register Function
function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }

    // Firebase Create User
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("User registered successfully!");
            console.log("User Registered:", userCredential.user);
        })
        .catch((error) => {
            alert("Error: " + error.message);
            console.error(error);
        });
}

// Login Function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Firebase Login
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful!");
            console.log("User Logged In:", userCredential.user);
        })
        .catch((error) => {
            alert("Error: " + error.message);
            console.error(error);
        });
}

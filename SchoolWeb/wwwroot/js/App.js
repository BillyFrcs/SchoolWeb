// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCsas70U-Zr6hARnDAqcN4co5945ENovQ",
    authDomain: "bilschool-1908.firebaseapp.com",
    databaseURL: "https://bilschool-1908-default-rtdb.firebaseio.com",
    projectId: "bilschool-1908",
    storageBucket: "bilschool-1908.appspot.com",
    messagingSenderId: "429095257056",
    appId: "1:429095257056:web:984f6c728b0d0c5590e185"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Collection of contact messages
let contactMessage = firebase.database().ref("user-messages");

// Firebase Database integration 
document.querySelector(".contact-form").addEventListener("submit", SubmitContactForm);

// Submit the contact form
function SubmitContactForm(event)
{
    event.preventDefault();

    // Get the input value
    const name = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    const subject = document.querySelector(".subject").value;
    const message = document.querySelector(".message").value;

    if (name !== "" && email !== "" && subject !== "" && message !== "") {
        console.log(name, email, subject, message); // DEBUG

        SaveContactMessage(name, email, subject, message);

        RefreshContactForm();
    }
    else {
        console.log("The form is still empty!"); // DEBUG
    }
}

// Save the contact message to the database
function SaveContactMessage(name, email, subject, message)
{
    const newContactMessage = contactMessage.push();

    newContactMessage.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}

// Refresh the contact form
function RefreshContactForm()
{
    document.querySelector(".contact-form").reset();
}
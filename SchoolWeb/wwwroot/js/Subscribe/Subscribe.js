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

// Collection to store the reference into the database
let emailSubscribeForm = firebase.database().ref("user-email-subscribe");

// Firebase Database integration
document.querySelector(".subscribe-form").addEventListener("submit", SubmitSubscribeForm);

// Submit the subscribe form
function SubmitSubscribeForm(event)
{
    event.preventDefault();

    // Get the input value
    const email = document.querySelector(".email-subscribe").value;

    if (email !== "") {
        SaveSubscribeForm(email);

        RefreshSubscribeForm();

        console.log(email); // DEBUG
    }
    else {
        console.log("The form is still empty!"); // DEBUG
    }
}

// Save the subscribe email to the database
function SaveSubscribeForm(email)
{
    const newEmailSubscribe = emailSubscribeForm.push();

    newEmailSubscribe.set({
        Email: email
    });
}

// Refresh the subscribe form
function RefreshSubscribeForm()
{
    document.querySelector(".subscribe-form").reset();
}

// Subscribe alert message 
const alertPlaceholder = document.getElementById('alert-subscribe-placeholder');

const alert = (message, type) => {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
}

const alertTrigger = document.getElementById('alert-subscribe-btn');

if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert('Thanks to subscribe our news letter!', 'success');
    })
}
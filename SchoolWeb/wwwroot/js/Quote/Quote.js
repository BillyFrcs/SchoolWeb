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
let quoteForm = firebase.database().ref("user-quote");

// Firebase Database integration 
document.querySelector(".quote-form").addEventListener("submit", SubmitQuoteForm);

// Submit the quote form
function SubmitQuoteForm(event)
{
    event.preventDefault();

    // Get the input value
    const firstName = document.querySelector(".first-name").value;
    const lastName = document.querySelector(".last-name").value;
    let course = document.getElementById('course');
    let selectedCourse = course.options[course.selectedIndex].text;
    const phoneNumber = document.querySelector(".phone-number").value;
    const quoteMessage = document.querySelector(".quote-message").value;

    if (firstName !== "" && lastName !== "" && selectedCourse !== "" && phoneNumber !== "" && quoteMessage !== "") {
        SaveQuote(firstName, lastName, selectedCourse, phoneNumber, quoteMessage);

        RefreshQuoteForm();

        console.log(firstName, lastName, selectedCourse, phoneNumber, quoteMessage); // DEBUG
    }
    else {
        console.log("The form is still empty!"); // DEBUG
    }
}

// Save the quote form to the database
function SaveQuote(firstName, lastName, course, phoneNumber, quoteMessage)
{
    const newQuoteForm = quoteForm.push();

    newQuoteForm.set({
        FirstName: firstName,
        LastName: lastName,
        Course: course,
        PhoneNumber: phoneNumber,
        Message: quoteMessage
    });
}

// Refresh the quote form
function RefreshQuoteForm()
{
    document.querySelector(".quote-form").reset();
}

// Quote alert message 
const alertPlaceholder = document.getElementById('alert-quote-placeholder');

const alert = (message, type) => {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    const firstName = document.querySelector(".first-name").value;
    const lastName = document.querySelector(".last-name").value;
    let course = document.getElementById('course');
    let selectedCourse = course.options[course.selectedIndex].text;
    const phoneNumber = document.querySelector(".phone-number").value;
    const quoteMessage = document.querySelector(".quote-message").value;

    if (firstName !== "" && lastName !== "" && selectedCourse !== "" && phoneNumber !== "" && quoteMessage !== "") {
        alertPlaceholder.append(wrapper);
    }
}

const alertTrigger = document.getElementById('alert-quote-btn');

if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert('Your request has been sent to us!', 'success');
    })
}
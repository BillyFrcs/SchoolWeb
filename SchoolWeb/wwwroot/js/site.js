// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(".nav-link").on("click", (event) => {
    $(".navbar-nav").find(".active").removeClass('active');
    $(event.target).parent().addClass('active');
});

// Auto remove alert message
$(document).ready(function () {
    window.setTimeout(function() {
        $(".alert").fadeTo(1000, 0).slideUp(1000, function(){
            $(this).remove();
        });
    }, 5000);
});

//Get the button
let scrollButton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollUpButton();
};

function scrollUpButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollButton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
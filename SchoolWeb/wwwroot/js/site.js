// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(".nav-link").on("click", (event) => {
    $(".navbar-nav").find(".active").removeClass('active');
    $(event.target).parent().addClass('active');
});
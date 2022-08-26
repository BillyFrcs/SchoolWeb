// Contact alert message 
const alertPlaceholder = document.getElementById('alert-contact-placeholder');

const alert = (message, type) => {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    const name = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    const subject = document.querySelector(".subject").value;
    const userMessage = document.querySelector(".message").value;

    if (name !== "" && email !== "" && subject !== "" && userMessage !== "") {
        alertPlaceholder.append(wrapper);
    }
}

const alertTrigger = document.getElementById('alert-contact-btn');

if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert('Thanks for contacting us!', 'success');
    })
}
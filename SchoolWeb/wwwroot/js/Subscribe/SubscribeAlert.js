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
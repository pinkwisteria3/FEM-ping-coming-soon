const form = document.querySelector('#form');
form.addEventListener('submit', e => handleSubmit(e));
function handleSubmit(e) {
    e.preventDefault();
    const email = document.querySelector('#email-input')
    const emailAddress = email.value;
    const small = document.querySelector('#error-msg');
    if (!emailAddress||!validEmailAddress(emailAddress)) {
        email.classList.add('redborder');
        small.classList.add('error');
        small.innerText = 'Please enter a valid email address';
        small.style.display = 'inline-block';
    } else {
        email.classList.remove('redborder');
        small.classList.remove('error');
        small.innerText = '';
        small.style.display = 'none';
    }
}

function validEmailAddress(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
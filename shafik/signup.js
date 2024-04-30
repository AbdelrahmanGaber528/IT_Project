document.addEventListener('DOMContentLoaded', function() {
    loadPreferences();
});
function savePreferences() {
    localStorage.setItem('email', document.getElementById('email').value);
}
function loadPreferences() {
    document.getElementById('email').value = localStorage.getItem('email');
}

function toggleDetails(details1) {
    var details = document.getElementById(details1);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.getElementById('feedbackForm').addEventListener('submit', function(event){
    console.log('Form submission triggered'); // Check if the event is triggered
    event.preventDefault();

    var isValid = true;

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');

    console.log('Name:', name.value); // Debug values
    console.log('Email:', email.value);
    console.log('Message:', message.value);

    // Validation for Name
    if (!name.value.trim()) {
        document.querySelector('#name + .error-message').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('#name + .error-message').style.display = 'none';
    }

    // Validation for Email
    if (!email.value.trim()) {
        document.querySelector('#email + .error-message').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('#email + .error-message').style.display = 'none';
    }

    // Validation for Message
    if (!message.value.trim()) {
        document.querySelector('#message + .error-message').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('#message + .error-message').style.display = 'none';
    }

    console.log('Form valid:', isValid);

    if (isValid) {
        this.submit();
    }

})


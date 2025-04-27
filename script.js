document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Menu Logic
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  } else {
    console.error("Menu icon or navbar element not found!");
  }

  // Contact Form Submission Logic
  const contactForm = document.querySelector('.contact form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      const fullName = document.querySelector('input[name="full_name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const phone = document.querySelector('input[name="phone"]').value;
      const subject = document.querySelector('input[name="subject"]').value;
      const message = document.querySelector('textarea[name="message"]').value;

      const formData = {
        full_name: fullName,
        email: email,
        phone: phone,
        subject: subject,
        message: message
      };

      // Send the data to the server using fetch API
      fetch('/submit_contact_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Tell the server we're sending JSON
        },
        body: JSON.stringify(formData) // Convert JavaScript object to JSON string
      })
      .then(response => response.text()) // Or response.json() if your server sends JSON back
      .then(data => {
        alert(data); // Show a message from the server (e.g., "Thank you!")
        contactForm.reset(); // Clear the form
      })
      .catch(error => {
        console.error('Error sending data to server:', error);
        alert('An error occurred while sending your message.');
      });
    });
  } else {
    console.error("Contact form element not found!");
  }
});
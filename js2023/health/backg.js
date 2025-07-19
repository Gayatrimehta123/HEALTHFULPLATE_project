// JavaScript to set the background image based on the clicked link
window.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav navbar');
    const body = document.querySelector('body');

    // Function to set background image based on the page
    function setBackground(imageUrl) {
        body.style.backgroundImage = `url('${imageUrl}')`;
        body.style.backgroundSize = 'cover';
        // Additional background styles can be added here
    }

    // Loop through each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the default link behavior

            // Get the href attribute of the clicked link
            const linkHref = this.getAttribute('href');

            // Set the background image based on the clicked link
            if (linkHref === 'services.html') {
                setBackground('chole.jpeg'); // Change this to your homepage image URL
            } else if (linkHref === 'about.html') {
                setBackground('chole.jpeg'); // Change this to your about page image URL
            } else if (linkHref === 'contact.html') {
                setBackground('chole.jpeg'); // Change this to your contact page image URL
            }

            // Optional: Redirect to the clicked link after setting the background
            setTimeout(function() {
                window.location.href = linkHref;
            }, 100); // Change this delay if needed
        });
    });
});

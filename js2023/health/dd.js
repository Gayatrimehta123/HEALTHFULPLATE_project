document.addEventListener("DOMContentLoaded", function() {
    const whatsappForm = document.getElementById('whatsappForm');
  
    whatsappForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const phoneNumber = this.querySelector('.whatsapp-link').getAttribute('data-number');
      const userName = document.getElementById('userName').value;
      const userMessage = document.getElementById('userMessage').value;
  
      const message = `Name: ${userName}%0A${userMessage}`;
  
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
      window.open(whatsappUrl, '_blank');
    });
  });
  
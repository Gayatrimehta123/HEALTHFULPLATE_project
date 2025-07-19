document.getElementById('whatsappLink').addEventListener('click', function() {
    // Replace '1234567890' with the desired phone number
    // Replace 'Hello%20there!' with the desired message
    var phoneNumber = '8057850172';
    var message = 'Hello%20there!'; // %20 represents space in URL encoding
  
    var whatsappURL = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + message;
  
    // Open the WhatsApp link in a new tab/window
    window.open(whatsappURL, '_blank');
  });
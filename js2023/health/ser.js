function openPopup() {
    document.getElementById('loginPopup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('loginPopup').style.display = 'none';
  }
  
  document.querySelector('.select-btn').addEventListener('click', openPopup);
  

  
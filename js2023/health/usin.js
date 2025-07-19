document.getElementById('needsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('userNeeds').value;
    displayUserNeeds(userInput);
    // Here you can perform further actions with the user input, like sending it to a server or database.
  });
  
  function displayUserNeeds(userInput) {
    const displayElement = document.getElementById('displayNeeds');
    const newDiv = document.createElement('div');
    newDiv.textContent = `- ${userInput}`;
    displayElement.appendChild(newDiv);
  }
  
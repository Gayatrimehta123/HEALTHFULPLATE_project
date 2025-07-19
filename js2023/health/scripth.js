
  

  function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    if (height > 0 && weight > 0) {
      const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `Your BMI is: ${bmi}`;
  
      // Call function to suggest meals based on BMI
      suggestMeals(bmi);
    } else {
      alert('Please enter valid height and weight.');
    }
  }
  
  function suggestMeals(bmi) {
    let mealSuggestions = document.getElementById('mealSuggestions');
    mealSuggestions.innerHTML = ''; // Clear previous suggestions
  
    let suggestedMeals = [];
  
    // Logic for suggesting meals based on BMI categories
    if (bmi < 18.5) {
      suggestedMeals = ['High protein foods', 'Healthy fats', 'Complex carbohydrates'];
    } else if (bmi >= 18.5 && bmi < 25) {
      
      suggestedMeals = ['<a href="balanced_meals.html">Balanced meals </a>', 'exercise.html', 'Lean proteins'];
    } else {
      suggestedMeals = ['<a href ="Portion_control.html" >Portion Control</a>', 'Reduced processed foods', 'Whole grains'];
    }
  
    // Display suggested meals in cards
    suggestedMeals.forEach(meal => {
      let mealCard = document.createElement('div');
      mealCard.classList.add('meal-card');
      mealCard.innerHTML = `<h3>${meal}</h3>`;
      mealSuggestions.appendChild(mealCard);
    });
  }
  
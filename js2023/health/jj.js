function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (height > 0 && weight > 0) {
      const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `Your BMI is: ${bmi}`;
    } else {
      alert('Please enter valid height and weight.');
    }
  }
  
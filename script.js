document.addEventListener("DOMContentLoaded", () => {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('result');
    const bmiForm = document.getElementById('bmi-form');

    // Load stored values
    const storedHeight = localStorage.getItem('height');
    const storedWeight = localStorage.getItem('weight');

    if (storedHeight) heightInput.value = storedHeight;
    if (storedWeight) weightInput.value = storedWeight;

    bmiForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultDiv.textContent = 'Please enter valid height and weight.';
            return;
        }

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        const result = document.getElementById("result");
      if (isNaN(bmi)) {
        result.textContent = "Please enter valid values for height and weight.";
      } else {
        result.textContent = "Your BMI is " + bmi + ". ";
        if (bmi < 18.5) {
          result.textContent += "You are underweight.";
        } else if (bmi < 25) {
          result.textContent += "You are normal weight.";
        } else if (bmi < 30) {
          result.textContent += "You are overweight.";
        } else {
          result.textContent += "You are obese.";
        }
        setTimeout(() => {
          form.submit();
        }, 3000); // redirect to next page after 1 second
      }
        // Save values to local storage
        localStorage.setItem('height', height);
        localStorage.setItem('weight', weight);
        localStorage.setItem('bmi', bmi);
        alert("Stored bmi!!");
    });
});


        function calculateBMI() {
            const heightInput = document.getElementById('height');
            const weightInput = document.getElementById('weight');
            const bmiValue = document.getElementById('bmi-value');
            const bmiCategory = document.getElementById('bmi-category');

            const heightInCm = parseFloat(heightInput.value);
            const weightInKg = parseFloat(weightInput.value);

            if (!isNaN(heightInCm) && !isNaN(weightInKg) && heightInCm > 0 && weightInKg > 0) {
                const heightInMeters = heightInCm / 100;
                const bmi = weightInKg / (heightInMeters * heightInMeters);
                bmiValue.textContent = bmi.toFixed(1);

                if (bmi < 18.5) {
                    bmiCategory.textContent = 'Underweight';
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    bmiCategory.textContent = 'Normal Weight';
                } else if (bmi >= 25 && bmi < 29.9) {
                    bmiCategory.textContent = 'Overweight';
                } else {
                    bmiCategory.textContent = 'Obese';
                }
            } else {
                bmiValue.textContent = '--';
                bmiCategory.textContent = '--';
            }
        }

        const bmiForm = document.querySelector('.bmi-calculator form');
        bmiForm.addEventListener('submit', function (event) {
            event.preventDefault();
            calculateBMI();
        });

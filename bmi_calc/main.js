var weight, height,age, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
    age = document.getElementById("age").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Your BMI is " + bmi +" kg / m2" +" which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is " + bmi +" kg / m2" +" which means " + "You are Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " + bmi + " kg / m2"+" which means " + "You are Overweight";
	} else if (bmi >= 30) {
		measure = "Your BMI is " + bmi + " kg / m2"+" which means " + "You are Obese";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (age<0) {
		document.getElementById("inputError").innerHTML = "Negative Values not Allowed";
	}else if(weight < 0){
        document.getElementById("inputError").innerHTML = "Negative Values not Allowed";
    }else{
        document.getElementById("inputError").innerHTML = "Negative Values not Allowed";
    }

}
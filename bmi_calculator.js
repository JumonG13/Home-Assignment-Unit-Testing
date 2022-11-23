//Calculates a person’s BMI or Body Mass Index

function bmi(weight, height) {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2)

if (bmi < 18.5) {
    return "Your BMI falls within the underweight range";
} else if (bmi < 25) {
    return "Your BMI falls within the normal or healthy weight range";
} else if (bmi < 30) {
    return "Your BMI falls within the overweight range";
} else {
    return "Your BMI falls within the obese range";
}
}

console.log(bmi(80,177))

const bmi = require("./bmi_calculator.js");

test("Checks if bmi is less than 18.5", () => {
    expect(bmi(60, 182)).toBe("Your BMI falls within the underweight range");
  });

test("Checks if bmi is less than 25", () => {
    expect(bmi(63, 162)).toBe("Your BMI falls within the normal or healthy weight range");
  });

test("Checks if bmi is less than 30", () => {
    expect(bmi(80, 177)).toBe("Your BMI falls within the overweight range");
  });

test("Checks if bmi is greater than 30", () => {
    expect(bmi(75, 140)).toBe("Your BMI falls within the obese range");
  });
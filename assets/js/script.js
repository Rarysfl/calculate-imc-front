const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const heightInCentimeters = parseFloat(
    document.getElementById("height").value
  );

  const heightInMeters = heightInCentimeters / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  const value = document.getElementById("value");
  const description = document.getElementById("description");

  value.classList.remove(
    "underweight",
    "normal",
    "overweight",
    "obesity",
    "severe-obesity",
    "morbid-obesity"
  );

  if (!isNaN(bmi)) {
    document.getElementById("infos").classList.remove("hidden");
    let message = "";

    if (bmi < 18.5) {
      message = "Cuidado! Você está abaixo do peso ideal!";
      value.classList.add("underweight");
    } else if (bmi >= 18.5 && bmi <= 25) {
      message = "Parabéns, você está no peso ideal!";
      value.classList.add("normal");
    } else if (bmi > 25 && bmi <= 30) {
      message = "Cuidado! Você está com sobrepeso!";
      value.classList.add("overweight");
    } else if (bmi > 30 && bmi <= 35) {
      message = "Cuidado! Você está com obesidade moderada!";
      value.classList.add("obesity");
    } else if (bmi > 35 && bmi <= 40) {
      message = "Cuidado! Você está com obesidade severa!";
      value.classList.add("severe-obesity");
    } else {
      message = "Cuidado! Você está com obesidade mórbida!";
      value.classList.add("morbid-obesity");
    }

    value.textContent = bmi.replace(".", ",");
    description.textContent = message;
  }
});

form.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("calculate").click();
  }
});

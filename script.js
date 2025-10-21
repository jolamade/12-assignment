function toLowercase() {
  let a = document.getElementById("address").value;
  document.getElementById("res1").innerHTML = a.toLowerCase();
}

function removeSpaces() {
  let e = document.getElementById("essay").value;
  let clean = e.trim().replace(/\s+/g, " ");
  document.getElementById("res2").innerHTML = clean;
}

function checkEven() {
  let n = document.getElementById("items").value;
  let r = document.getElementById("res3");
  if (n % 2 == 0 && n != "") {
    r.innerHTML = "Discount Applied";
  } else {
    r.innerHTML = "No Discount";
  }
}

function checkTemp() {
  let t = document.getElementById("temp").value;
  let r = document.getElementById("res4");
  if (t < 19) r.innerHTML = "Cold";
  else if (t >= 20 && t <= 28) r.innerHTML = "Warm";
  else r.innerHTML = "Hot";
}

function calcBMI() {
  let w = document.getElementById("weight").value;
  let h = document.getElementById("height").value;
  let bmi = w / (h * h);
  let r = document.getElementById("res5");
  if (bmi < 18.5) r.innerHTML = "BMI: " + bmi.toFixed(2) + " (Underweight)";
  else if (bmi < 25) r.innerHTML = "BMI: " + bmi.toFixed(2) + " (Normal)";
  else if (bmi < 30) r.innerHTML = "BMI: " + bmi.toFixed(2) + " (Overweight)";
  else r.innerHTML = "BMI: " + bmi.toFixed(2) + " (Obese)";
}

function checkUsername() {
  let u = document.getElementById("username").value;
  let valid = /^[A-Za-z0-9_]+$/.test(u);
  document.getElementById("res6").innerHTML = valid ? "Valid" : "Invalid";
}

function checkLuggage() {
  let w = document.getElementById("weight2").value;
  let r = document.getElementById("res7");
  if (w < 20) r.innerHTML = "Underweight";
  else if (w <= 30) r.innerHTML = "Allowed";
  else r.innerHTML = "Overweight";
}

function checkEmail() {
  let e = document.getElementById("email").value;
  let ok = e.endsWith("@oauife.edu.ng");
  document.getElementById("res8").innerHTML = ok ? "Valid" : "Invalid";
}

function checkGrade() {
  let s = document.getElementById("score").value;
  let r = document.getElementById("res9");
  if (s >= 70 && s <= 100) r.innerHTML = "A (Excellent)";
  else if (s >= 60) r.innerHTML = "B (Very Good)";
  else if (s >= 50) r.innerHTML = "C (Good)";
  else if (s >= 40) r.innerHTML = "D (Pass)";
  else r.innerHTML = "F (Fail)";
}

function calcDiscount() {
  let a = document.getElementById("amount").value;
  let r = document.getElementById("res10");
  if (a < 5000) r.innerHTML = "No discount. Pay ₦" + a;
  else if (a <= 10000) r.innerHTML = "Pay ₦" + (a * 0.95).toFixed(2);
  else if (a <= 20000) r.innerHTML = "Pay ₦" + (a * 0.9).toFixed(2);
  else r.innerHTML = "Pay ₦" + (a * 0.85).toFixed(2);
}

function checkJamb() {
  let s = document.getElementById("jamb").value;
  let c = document.getElementById("course").value.toLowerCase();
  let r = document.getElementById("res11");
  if (c == "medicine" && s >= 280) r.innerHTML = "Eligible";
  else if (c == "engineering" && s >= 250) r.innerHTML = "Eligible";
  else if (c == "sciences" && s >= 220) r.innerHTML = "Eligible";
  else if (c == "arts" && s >= 200) r.innerHTML = "Eligible";
  else r.innerHTML = "Not Eligible";
}

function checkVote() {
  let y = document.getElementById("year").value;
  let age = 2025 - y;
  let r = document.getElementById("res12");
  if (age >= 18) r.innerHTML = "Eligible to vote (" + age + " years)";
  else r.innerHTML = "Not eligible. Wait " + (18 - age) + " years";
}
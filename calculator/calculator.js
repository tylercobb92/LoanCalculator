var UIValues = new Object();
UIValues.loanAmount = 10000;
UIValues.loanYears = 10;
UIValues.loanRate = 0.1;
const loanAmount = document.getElementById("loan-amount");
const loanYears = document.getElementById("loan-years");
const loanRate = document.getElementById("loan-rate");
// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  calculateMonthlyPayment(UIValues);
  updateUI();
}

function updateUI() {
  loanAmount.value = UIValues.loanAmount;
  loanYears.value = UIValues.loanYears;
  loanRate.value = UIValues.loanRate;
}

function getCurrentUIValues() {
  UIValues.loanAmount = document.getElementById("loan-amount").value == "" ? UIValues.loanAmount : document.getElementById("loan-amount").value;
  UIValues.loanYears = document.getElementById("loan-years").value == "" ? UIValues.loanYears : document.getElementById("loan-years").value;
  UIValues.loanRate = document.getElementById("loan-rate").value == "" ? UIValues.loanRate : document.getElementById("loan-rate").value;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  getCurrentUIValues();
  calculateMonthlyPayment(UIValues);
  updateMonthly();
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // let x = getCurrentUIValues();
  let p = values.loanAmount;
  let i = (values.loanRate) / 12;
  let n = (values.loanYears) * 12;
  return parseFloat(((p * i) / (1 - (1 + i) ** -(n))).toFixed(2));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly() {
  let payment = document.getElementById("monthly-payment");
  payment.textContent = calculateMonthlyPayment(UIValues);
}

window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

var inputs = Array.from(document.getElementsByTagName("input"));
inputs.forEach(i => i.addEventListener("change", update()));


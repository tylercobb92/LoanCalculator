window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.getElementById("loan-amount");
  const loanYears = document.getElementById("loan-years");
  const loanRate = document.getElementById("loan-rate");
  loanAmount.value = 10000;
  loanYears.value = 10;
  loanRate.value = 0.1;
  calculateMonthlyPayment();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const loanAmount = document.getElementById("loan-amount");
  const loanYears = document.getElementById("loan-years");
  const loanRate = document.getElementById("loan-rate");
  loanAmount.textContent = loanAmount;
  loanYears.textContent = loanYears;
  loanRate.textContent = loanRate;
  calculateMonthlyPayment();
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = document.getElementById("loan-amount").value;
  const n = (document.getElementById("loan-years").value) * 12;
  const i = (document.getElementById("loan-rate").value) / 12;
  const monthlyPayment = document.getElementById("monthly-payment")
  monthlyPayment.textContent = ((P * i) / (1 - (1 + i) ** -(n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {

}

document.addEventListener("click", function (e) {
  console.log(e.target)
})
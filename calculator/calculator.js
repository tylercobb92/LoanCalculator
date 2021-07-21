window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    // setupIntialValues();
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
function setupInitialValues() {
  const amount = document.getElementById("loan-amount");
  const years = document.getElementById("loan-years");
  const rate = document.getElementById("loan-rate");
  amount.value = 10000;
  years.value = 10;
  rate.value = 0.1;
  calculateMonthlyPayment();
}

// Get the current values from the UI
// Update the monthly payment
function update() {

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  getCurrentUIValues();
  let x = getCurrentUIValues();
  let p = x.amount;
  let i = (x.rate) / 12;
  let n = (x.years) * 12;
  let monthlyPayment = ((p * i) / (1 - (1 + i) ** -(n))).toFixed(2);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}

document.addEventListener("click", function (e) {
  console.log(e.target)
})
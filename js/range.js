const slider1 = document.getElementById("range1");
const output1 = document.getElementById("demo1");

const slider2 = document.getElementById("range2");
const output2 = document.getElementById("demo2");

const slider3 = document.getElementById("range3");
const output3 = document.getElementById("demo3");

const monthlyPaymentEl = document.getElementById("monthly-payment");
const totalPaymentEl = document.getElementById("total-payment");

slider1.oninput = updateLoan;
slider2.oninput = updateLoan;
slider3.oninput = updateLoan;

function updateLoan() {
    const amount = parseFloat(slider1.value);
    const months = parseInt(slider2.value);
    const interestRate = parseFloat(slider3.value) / 100;

    output1.innerHTML = amount + " AZN";
    output2.innerHTML = months + " ay";
    output3.innerHTML = interestRate * 100 + " %";

    // Calculate monthly payment (annuity formula)
    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));
    const totalAmount = monthlyPayment * months;

    // Update the UI
    if (monthlyPaymentEl && totalPaymentEl) {
        monthlyPaymentEl.innerHTML = monthlyPayment.toFixed(2) + " AZN";
        totalPaymentEl.innerHTML = totalAmount.toFixed(2) + " AZN";
    }
}

// Initialize values on page load
updateLoan();
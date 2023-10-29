var loaderVar;

function loaderFunc() {
  loaderVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}       


const form = document.getElementById('tipCalculatorForm');
const billTotalInput = document.getElementById('billTotal');
const tipPercentageInput = document.getElementById('tipPercentage');
const tipSliderInput = document.getElementById('tipSlider');
const tipAmountInput = document.getElementById('tipAmount');
const totalWithTipInput = document.getElementById('totalWithTip');

form.addEventListener('input', updateTipCalculator);

function clearFunction() {
    document.getElementById("tipCalculatorForm").reset();
  }

function updateTipCalculator() {
    const billTotal = parseFloat(billTotalInput.value);
    const tipPercentage = parseInt(tipSliderInput.value);
                
    if (isNaN(billTotal)) {
        alert('Please enter a valid number for Bill Total.');
        return;
    }

    const tipAmount = (billTotal * tipPercentage) / 100;
    const totalWithTip = billTotal + tipAmount;
    tipPercentageInput.value = tipPercentage + "%";
    tipAmountInput.value = tipAmount.toFixed(2);
    totalWithTipInput.value = totalWithTip.toFixed(2);
}
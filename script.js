var loaderVar; //I'll use this for the loader
const form = document.getElementById('tipCalculatorForm'); //var for the form
const billTotalInput = document.getElementById('billTotal'); //var for the bill amount field in the form that user provides
const tipPercentageInput = document.getElementById('tipPercentage'); //using this to put the tip % value
const tipSliderInput = document.getElementById('tipSlider'); //using this to get the tip% value from slider
const tipAmountInput = document.getElementById('tipAmount'); //tip amount after calculation
const totalWithTipInput = document.getElementById('totalWithTip');  //final total after calculation

// giong to show a mandatory loader on the page for the mentioned duration and then show page transition

function loaderFunc() {
  loaderVar = setTimeout(showPage, 1300);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("preloader").classList.add('hidden');
}       

//function for the clear button

function clearFunction() {
  document.getElementById("tipCalculatorForm").reset();
}

//event listener for the user inputs

form.addEventListener('input', updateTipCalculator);

//function for calculating tip amount and total bill

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
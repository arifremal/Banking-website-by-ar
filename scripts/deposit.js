// document.getElementById("btn-deposit").addEventListener("click", function () {
//   const depositField = document.getElementById("depo-field");
//   const depositFieldString = depositField.value;
//   const depositFieldFinall = parseFloat(depositFieldString);
//   depositField.value = "";

//   const depoBox = document.getElementById("deposite-totall");
//   const depoBoxInputString = depoBox.innerText;
//   const depoBoxPuttingFinall = parseFloat(depoBoxInputString);

//   const balanceBox = document.getElementById("balance-totall");
//   const balanceBoxFieldString = balanceBox.innerText;
//   const balanceTotallAmount = parseFloat(balanceBoxFieldString);

//   const depositTotallAmount = depoBoxPuttingFinall + depositFieldFinall;
//   const balanceTotall = depositTotallAmount + balanceTotallAmount;
//   balanceBox.innerText = balanceTotall;

//   depoBox.innerText = depositTotallAmount;
// });

// mini version -------------->
function getInputId(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFiledString = inputField.value;
    const inpuFieldFinll = parseFloat(inputFiledString);
    inputField.value = '';
    return inpuFieldFinll
    
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId)
    const elementString = element.innerText
    const elementAmount = parseFloat(elementString)
    return elementAmount
}

function setTextElementIdByValue(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


document.getElementById("btn-deposit").addEventListener("click", function () {

    const newDepositAmount = getInputId ('depo-field');
    const previousTotall = getElementValueById('deposite-totall')
    const newdepoTotall = newDepositAmount + previousTotall;

    setTextElementIdByValue ('deposite-totall',newdepoTotall)

    const previousBalanceTotall = getElementValueById('balance-totall')
    const newBalanceTotall = previousBalanceTotall + newdepoTotall;
    setTextElementIdByValue ('balance-totall',newBalanceTotall)




  });

document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('depo-field');
    const depositFieldString = depositField.value;
    const depositFieldFinall = parseFloat(depositFieldString);
    depositField.value = '';

    const depoBox = document.getElementById('deposite-totall');
    const depoBoxInputString = depoBox.innerText;
    const depoBoxPuttingFinall = parseFloat(depoBoxInputString);


    const balanceBox = document.getElementById('balance-totall');
    const balanceBoxFieldString = balanceBox.innerText;
    const balanceTotallAmount = parseFloat(balanceBoxFieldString);

    const depositTotallAmount = depoBoxPuttingFinall + depositFieldFinall
    const balanceTotall = depositTotallAmount + balanceTotallAmount
    balanceBox.innerText = balanceTotall;

    depoBox.innerText= depositTotallAmount;

   


})
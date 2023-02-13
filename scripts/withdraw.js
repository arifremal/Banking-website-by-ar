// document.getElementById('btn-withdraw').addEventListener('click', function(){
//     const withdrawFiled = document.getElementById('withdraw-field');
//     const withdrawFiledString = withdrawFiled.value;
//     const withdrawFiledTotall = parseFloat(withdrawFiledString);
//     withdrawFiled.value = '';
//     const withdrawBox = document.getElementById('withdraw-totall');
//     const withdrawBoxString = withdrawBox.innerText;
//     const withdrawBoxTotall = parseFloat(withdrawBoxString);

//     const withdrewAmountTotall =  withdrawBoxTotall + withdrawFiledTotall;

//     const balanceBox = document.getElementById('balance-totall');
//     const balanceBoxFieldString = balanceBox.innerText;
//     const balanceTotallAmount = parseFloat(balanceBoxFieldString);
//     const balancewithdraw = balanceTotallAmount - withdrewAmountTotall;
//     balanceBox.innerText = balancewithdraw;

//     withdrawBox.innerText = withdrewAmountTotall

// })


// MINI VERSION ---->
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFiled = document.getElementById('withdraw-field');
    const withdrawFiledString = withdrawFiled.value;
    const withdrawFiledTotall = parseFloat(withdrawFiledString);
    withdrawFiled.value = '';
    const withdrawBox = document.getElementById('withdraw-totall');
    const withdrawBoxString = withdrawBox.innerText;
    const withdrawBoxTotall = parseFloat(withdrawBoxString);

    const withdrewAmountTotall =  withdrawBoxTotall + withdrawFiledTotall;

    const balanceBox = document.getElementById('balance-totall');
    const balanceBoxFieldString = balanceBox.innerText;
    const balanceTotallAmount = parseFloat(balanceBoxFieldString);
    const balancewithdraw = balanceTotallAmount - withdrewAmountTotall;
    balanceBox.innerText = balancewithdraw;

    withdrawBox.innerText = withdrewAmountTotall

})
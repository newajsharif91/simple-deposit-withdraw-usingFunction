document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount=getInputFieldValueById('withdraw-field');

    const previousWithdrawTotal=getTextElementValueById('withdraw-total');
    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
    setTextElementValueById('withdraw-total',newWithdrawTotal);
    const balanceTotalElement=document.getElementById('balance-total');
const balanceTotalElementString=balanceTotalElement.innerText;
const newBalanceTotalElement=parseFloat(balanceTotalElementString);

const newBalance=newBalanceTotalElement-newWithdrawTotal;
balanceTotalElement.innerText=newBalance;
})
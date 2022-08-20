// function getInputFieldValueById(inputId){
//     const inputField=document.getElementById(inputId);
//     const inputFieldValueString=inputField.value;
//     const inputFieldValue=parseFloat(inputFieldValueString);
//     inputField.value='';
//     return inputFieldValue;
    
// }

// function getTextElementValueById(elementId){
// const element=document.getElementById(elementId);
// const elementValueString=element.innerText;
// const value=parseFloat(elementValueString);
// return value;
// }
// function setTextElementValueById(elementId,newValue){
//     const textElement=document.getElementById(elementId);
//     textElement.innerText=newValue;
// }

document.getElementById('btn-deposit').addEventListener('click',function(){
const newDepositAmount=getInputFieldValueById('deposit-field');
const previousDepositTotal=getTextElementValueById('deposit-total');

const newDepositTotal=previousDepositTotal+newDepositAmount;

setTextElementValueById('deposit-total',newDepositTotal);

const balanceTotalElement=document.getElementById('balance-total');
const balanceTotalElementString=balanceTotalElement.innerText;
const newBalanceTotalElement=parseFloat(balanceTotalElementString);

const newBalance=newBalanceTotalElement+newDepositTotal;
balanceTotalElement.innerText=newBalance;

})
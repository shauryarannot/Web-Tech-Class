let addButton = document.querySelector('#add');
let subButton = document.querySelector('#sub');
let answer = document.querySelector('#answer');

function addNumbers()
{
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);
    const addAns=num1+num2;
    alert(`Sum is: ${addAns}`);
}

function subNumbers()
{
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);
    const subAns=num1-num2;
    alert(`Difference is: ${subAns}`);
}

addButton.addEventListener('click',function(){
    addNumbers(num1,num2);
});

subButton.addEventListener('click',function(){
    subNumbers(num1,num2);
});
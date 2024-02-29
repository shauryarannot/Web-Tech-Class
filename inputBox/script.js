const input=parseInt(document.querySelector('#ageInput').value);
const message=document.querySelector('p');

function ageGroup(input)
{
    if(input>=0 && input<=12){
        message.innerHTML="Child";
    }
    else if(input>=13 && input<=18){
        message.innerHTML='Teenager';
    }
    else if(input>=18 && input<=55){
        message.innerHTML='Adult';
    }
    else{
        message.innerHTML='Senior Citizen';
    }
}
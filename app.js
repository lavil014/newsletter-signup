const emailInput = document.querySelector('input');
const mainContainer = document.getElementById('main-container');
const inputBtn = document.getElementById('validate-email');
const successSection = document.getElementById('success-section');
const dismissBtn = document.getElementById('dismiss-buttton');
const errorState = document.getElementById('error-state');
let userEmail = document.querySelector('span');


const validateEmail = (event)=>{

    event.preventDefault();
    
    let emailValue = emailInput.value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    if (!emailPattern.test(emailValue)){
        errorState.style.visibility = 'visible';
    } else{
        successSection.style.visibility = 'visible';
        mainContainer.style.visibility = 'hidden';
        userEmail.innerText = emailValue;
    } 
}

const dismissMessage = (event)=>{
    successSection.style.visibility = 'hidden';
    mainContainer.style.visibility = 'visible';
    emailInput.value = '';
    errorState.style.visibility = 'hidden';
}

inputBtn.addEventListener('click', validateEmail);
dismissBtn.addEventListener('click', dismissMessage);


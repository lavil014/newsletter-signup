const emailInput = document.querySelector('input');
const mainContainer = document.getElementById('main-container');
const inputBtn = document.getElementById('validate-email');
const successSection = document.getElementById('success-section');
/*const dismissBtn = ;*/
const errorState = document.getElementById('error-state');




const validateEmail = (event)=>{

    event.preventDefault();
    let userEmail = document.getElementById('user-email');
    let emailValue = emailInput.value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    if (!emailPattern.test(emailValue)){
        errorState.style.visibility = 'visible';
    } else{
        successSection.style.visibility = 'visible';
        mainContainer.style.visibility = 'hidden';
        userEmail.innerText = emailValue;
        console.log(emailValue);
    } 

    
}

inputBtn.addEventListener('click', validateEmail);


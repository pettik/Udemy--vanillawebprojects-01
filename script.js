const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Show input error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const errorMessage = formControl.querySelector('small');
    errorMessage.textContent = `${message}`;
}

// Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Eventlistenres
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username,'Username is required');
    }else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email,'Email is required');
    }else if(!isValidEmail(email.value)){
        showError(email, 'Email is not valid');
    }
    else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password,'Password is required');
    }else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2,'Password 2 is required');
    }else{
        showSuccess(password2);
    }
})
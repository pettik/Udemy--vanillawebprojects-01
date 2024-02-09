const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Show input error message
function showError(input, message) {
   const formControlBox = input.parentElement.parentElement;
   formControlBox.className = 'form-control-box error';
   const errorMessage = formControlBox.querySelector('small');
   errorMessage.textContent = `${message}`;
}

// Show success outline
function showSuccess(input) {
   const formControlBox = input.parentElement.parentElement;
   formControlBox.className = 'form-control-box success';
}

//Check email is valid
function checkEmail(input) {
   const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (re.test(input.value.trim())) {
      showSuccess(input);
   } else {
      showError(input, 'Email is not valid');
   }
}

//Check required fields
function checkRequired(inputArr) {
   inputArr.forEach(function (input) {
      if (input.value.trim() === '') {
         showError(input, `${getFieldName(input)} is required`);
      } else {
         showSuccess(input);
      }
   });
}

// Check input lenght
function checkLength(input, min, max) {
   if (input.value.length < min) {
      showError(
         input,
         `${getFieldName(input)} must be at least ${min} characters`
      );
   } else if (input.value.length > max) {
      showError(
         input,
         `${getFieldName(input)} must be maximum ${max} characters`
      );
   } else {
      showSuccess(input);
   }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
   if (input1.value !== input2.value) {
      showError(input2, 'Passwords do not match');
   }
}

// Get fieldName
function getFieldName(input) {
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Eventlistenres
form.addEventListener('submit', function (e) {
   e.preventDefault();

   checkRequired([username, email, password, password2]);
   checkLength(username, 3, 15);
   checkLength(password, 6, 25);
   checkEmail(email);
   checkPasswordsMatch(password, password2);
});


/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (formPass, formEye) => {
   const input = document.getElementById(formPass),
      iconEye = document.getElementById(formEye)

   iconEye.addEventListener('click', () => {
      // Change password to text
      if (input.type === 'password') {
         // Switch to text
         input.type = 'text'

         // Icon change
         iconEye.classList.add('ri-eye-line')
         iconEye.classList.remove('ri-eye-off-line')
      } else {
         // Change to password
         input.type = 'password'

         // Icon change
         iconEye.classList.remove('ri-eye-line')
         iconEye.classList.add('ri-eye-off-line')
      }
   })
}

showHiddenPass('password', 'form-eye');
showHiddenPass('password2', 'form-eye2');
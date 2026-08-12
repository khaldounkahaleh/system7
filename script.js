const container = document.querySelector('.container');
const registerbtn = document.querySelector('.register-btn');
const loginbtn = document.querySelector('.login-btn');

registerbtn.addEventListener('click',()=>{
    container.classList.add('active');
})

loginbtn.addEventListener('click',()=>{
    container.classList.remove('active');
})


// Source - https://stackoverflow.com/a/46043823
// Posted by Thijs
// Retrieved 2026-08-09, License - CC BY-SA 3.0

let
  attempts = 3,
  logins = new Map([
    ['root', 'root'],
    ['admin', 'admin']
  ]);
  formElement = document.getElementById('loginForm');

function disableForm() {
  const
    usernameInput = document.getElementById('username'),
    passwordInput = document.getElementById('password'),
    submitButton = document.getElementById('submit');

  usernameInput.setAttribute('disabled', 'disabled');
  passwordInput.setAttribute('disabled', 'disabled');
  submitButton.setAttribute('disabled', 'disabled');  
}

function decreaseAttemptsLeft() {
  // Decrease attempts by 1.
  attempts--;
  
  // Check if attempts is 0...
  if (attempts === 0) {
    // ... and disable the form controls.
    disableForm();
    // ... and show the user a message.
    alert('You have failed  to log in 3 times, Fields have been turned off. Please try again later');
  } else {
    // Show a message with login attempts left.
    const
      message = `You have ${attempts} attempt(s) left.`;
    alert(message);  
  }
}

function onFormSubmit(event){
  // prevent the actual form submission.
  event.preventDefault();
  
  const
    usernameInput = document.getElementById('username'),
    passwordInput = document.getElementById('password');
  
  if (
    // When the logins map doesn't have a key for the username OR
    !logins.has(usernameInput.value) ||
    // The password doesn't match the value for the user name
    logins.get(usernameInput.value) !== passwordInput.value
  ) {
    // Decrease the number of attempts left.
    decreaseAttemptsLeft();
    // Exit the method.
    return;
  }
  
  // Show the success message.
  alert('Login success!');
  // Reset the attempts counter.
  attempts = 3;
}
  
form.addEventListener('submit', onFormSubmit);
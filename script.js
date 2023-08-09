document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.main-container');
  const loginContainer = document.querySelector('.login-container');
  const registerContainer = document.querySelector('.register-container');

  container.addEventListener('click', e => {
    const registerFormBtn = e.target.closest('.registration');
    const signUpBtn = e.target.closest('.signInBtn-link');

    if (registerFormBtn) {
      loginContainer.classList.add('slide');
      registerContainer.classList.remove('slide');
    }
    if (signUpBtn) {
      registerContainer.classList.add('slide');
      loginContainer.classList.remove('slide');
    }
  });

  const usernameName = document.querySelector('#name')
  const password = document.querySelector('#password')
  const form = document.querySelector('#form')
  const errorElement = document.querySelector('#error')
  const registerButton = document.querySelector('.register-btn');

  registerButton.addEventListener('click', (e) => {
  let messages = []
  if(usernameName.value === '' || usernameName.value == null) {
    messages.push('Name is required')
  }

  if(password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }
  if (messages.length > 0) {

    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
 
})
});



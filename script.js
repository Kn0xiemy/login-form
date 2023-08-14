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

 
});





// login
const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const forgotForm = document.getElementById('forgotForm');
    const formTitle = document.getElementById('formTitle');

    function showLogin() {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      forgotForm.style.display = 'none';
      formTitle.innerText = 'Login';
    }

    function showSignup() {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      forgotForm.style.display = 'none';
      formTitle.innerText = 'Signup';
    }

    function showForgotPassword() {
      loginForm.style.display = 'none';
      signupForm.style.display = 'none';
      forgotForm.style.display = 'block';
      formTitle.innerText = 'Forgot Password';
    }

    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
      if (username === 'admin' && password === '123456') {
        alert('Login successful!');
      } else {
        document.getElementById('loginError').style.display = 'block';
      }
    });

    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const password = document.getElementById('signupPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      if (password !== confirmPassword) {
        document.getElementById('signupError').innerText = 'Passwords do not match!';
        document.getElementById('signupError').style.display = 'block';
      } else {
        alert('Signup successful!');
      }
    });

    forgotForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('resetEmail').value;
      if (email.includes('@')) {
        document.getElementById('resetSuccess').style.display = 'block';
      } else {
        alert('Please enter a valid email.');
      }
    });
// sogup
function searchBooks() {
    // Get input value
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.product-card');
  
    cards.forEach(function(card) {
      let title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.indexOf(input) > -1) {
        card.style.display = '';  // Show the card
      } else {
        card.style.display = 'none';  // Hide the card
      }
    });
  }
  

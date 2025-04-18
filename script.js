// Login, Signup, Forgot Password Forms Handling
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

// Search Books
function searchBooks() {
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

// Wishlist and Cart functionality
let cartCount = 0;
let wishlistCount = 0;

// Wishlist Button Click
document.querySelectorAll(".wishlist-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    wishlistCount++;
    document.getElementById("wishlist-count").innerText = wishlistCount;
    showPopup('উইশলিস্টে যোগ হয়েছে!');
  });
});

// Add to Cart Button Click
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    showPopup('কার্টে যোগ করা হয়েছে!');
  });
});

// Show Popup Function
function showPopup(message) {
  const popup = document.createElement('div');
  popup.className = 'toast-popup position-fixed bottom-0 end-0 p-3 bg-success text-white shadow rounded';
  popup.style.zIndex = 9999;
  popup.textContent = message;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 2000);
}

const loginBtn = document.getElementById('login-btn');
const passwordInput = document.getElementById('password');
const loginScreen = document.getElementById('login-screen');
const fileScreen = document.getElementById('file-screen');
const tabs = document.querySelectorAll('.file-tab');
const pages = document.querySelectorAll('.page');

loginBtn.addEventListener('click', () => {
  const val = passwordInput.value.trim().toLowerCase();
  if (val === 'ilovedexter') {
    loginScreen.classList.remove('active');
    fileScreen.classList.add('active');
  } else {
    alert('Access Denied: Incorrect password.');
  }
});

// allow Enter key on login
passwordInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') loginBtn.click();
});

// flip animation logic
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-file');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

const loginBtn = document.getElementById('login-btn');
const passwordInput = document.getElementById('password');
const loginScreen = document.getElementById('login-screen');
const fileScreen = document.getElementById('file-screen');
const tabs = document.querySelectorAll('.file-tab');
const pages = document.querySelectorAll('.page');
const videoModal = document.getElementById('video-modal');
const closeVideo = document.getElementById('close-video');
const video = document.getElementById('birthday-video');

loginBtn.addEventListener('click', () => {
  const val = passwordInput.value.trim().toLowerCase();
  if (val === 'ilovedexter') {
    loginScreen.classList.remove('active');
    fileScreen.classList.add('active');
  } else {
    alert('Access Denied: Incorrect password.');
  }
});

// allow Enter key
passwordInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') loginBtn.click();
});

// flip animations
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-file');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(target).classList.add('active');

    // open video modal if "Video Evidence" tab
    if (target === 'evidence3') {
      setTimeout(() => {
        videoModal.classList.add('active');
        video.pause();
        video.currentTime = 0;
      }, 400);
    }
  });
});

// close video modal
closeVideo.addEventListener('click', () => {
  videoModal.classList.remove('active');
  video.pause();
  video.currentTime = 0;
});

// LOGIN LOGIC
const loginBtn = document.getElementById("login-btn");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");
const loginScreen = document.getElementById("login-screen");
const fileScreen = document.getElementById("file-screen");

loginBtn.addEventListener("click", () => {
  if (passwordInput.value.toLowerCase() === "ilovedexter") {
    loginScreen.style.display = "none";
    fileScreen.classList.remove("hidden");
  } else {
    errorMsg.textContent = "Access Denied. Incorrect Password.";
  }
});

// TAB SWITCHING
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabContents.forEach((content) => content.classList.add("hidden"));
    document.getElementById(btn.dataset.target).classList.remove("hidden");
  });
});

// VIDEO OVERLAY
const playVideoBtn = document.getElementById("play-video-btn");
const videoOverlay = document.getElementById("video-overlay");
const closeVideoBtn = document.getElementById("close-video");
const caseVideo = document.getElementById("case-video");

playVideoBtn.addEventListener("click", () => {
  videoOverlay.classList.remove("hidden");
  caseVideo.currentTime = 0;
  caseVideo.play();
});

closeVideoBtn.addEventListener("click", () => {
  caseVideo.pause();
  videoOverlay.classList.add("hidden");
});

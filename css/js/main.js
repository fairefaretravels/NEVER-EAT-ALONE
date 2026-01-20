let timerInterval;
let timeLeft = 20 * 60; // 20 minutes in seconds
let cameraMode = "Face + Plate";

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleCamera() {
  cameraMode = cameraMode === "Face + Plate" ? "Plate Only" : "Face + Plate";
  document.getElementById("camera-mode").innerText = cameraMode;
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      alert("Session ended!");
      timeLeft = 20 * 60;
      document.getElementById("timer").innerText = "20:00";
    }
  }, 1000);
}

function endSession() {
  clearInterval(timerInterval);
  timeLeft = 20 * 60;
  document.getElementById("timer").innerText = "20:00";
  alert("Session ended!");
}

function playGame() {
  alert("Mini-game placeholder! Imagine a fun interactive game here.");
}

// Form submissions (mock)
document.getElementById("restaurant-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! A team member will contact your restaurant soon.");
  this.reset();
});

document.getElementById("user-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for signing up! We'll notify you when the platform launches.");
  this.reset();
});

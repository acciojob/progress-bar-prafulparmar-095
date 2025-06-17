const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

nextBtn.addEventListener("click", () => {
  if (currentStep < circles.length) {
    currentStep++;
    updateUI();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateUI();
  }
});

function updateUI() {
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const progressWidth = ((currentStep - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressWidth}%`;

  prevBtn.disabled = currentStep === 1;
  nextBtn.disabled = currentStep === circles.length;
}


    function dynamiccontainer() {
          const roles = ["Software Developer", "Designer", "SEO Analyst"];
const dynamicText = document.getElementById("dynamic-text");
let currentRoleIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  const fullText = roles[currentRoleIndex];
  dynamicText.textContent = fullText.substring(0, charIndex);

  if (!isDeleting && charIndex === fullText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // Pause before backspacing
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
  }
  charIndex += isDeleting ? -1 : 1;
  setTimeout(typeEffect, isDeleting ? 100 : 150); // Set typing speed
}
typeEffect();

}
    
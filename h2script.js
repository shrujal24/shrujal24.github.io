let isDarkMode = false;
let body = document.body;

document.addEventListener('DOMContentLoaded', () => {
	const toggleText = document.getElementById('toggle-text'); 
	const toggleSwitch = document.getElementById('toggleSwitch');
    const toggleBall = document.getElementById('toggleBall');
	//const isDarkMode = body.classList.contains('bg-black');
	dynamicTextChangeEvent();
	loadingEvent();
	modeSwitchToogle();
	isDarkModeOnReload();
	toggleSwitch.addEventListener('click', () => {
	toggleSwitch.classList.toggle('light-mode');
    toggleSwitch.classList.toggle('dark-mode');
    //document.body.style.backgroundColor = toggleSwitch.classList.contains('light-mode') ? '#ffffff' : '#1e3c72';
	toggleSwitch.classList.toggle('dark-mode');
	body = document.body;
	isDarkMode = body.classList.contains('bg-black');
	isDarkModeCheck();
});


// scroll Event Starts
	const sections = document.querySelectorAll('.section');
 	window.addEventListener('scroll', () => {
    let current = '';
     sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
       }
      });
    });
// scroll Event ends
});


function isDarkModeOnReload()
{

}

function isDarkModeCheck(){
	//const isDarkMode = body.classList.contains('bg-black');
	if (isDarkMode) {
	body.classList.remove('bg-black', 'text-white');
	body.classList.add('bg-white', 'text-black');
	//toggle.classList.remove('dark');
	$(':root').css('--navbar-text-color', 'black');
	$('.navbar-toggler').css('color', 'black');
	$(':root').css('--navbar-text-hover-color', 'gray');
    $(':root').css('--navbar-active-color', 'blue');
	} 
	else {
	body.classList.remove('bg-white', 'text-black'); 
	body.classList.add('bg-black', 'text-white'); 
	//toggle.classList.add('dark');
	 $(':root').css('--navbar-text-color', 'white');
	$('.navbar-toggler').css('color', 'white');
	 $(':root').css('--navbar-text-hover-color', 'lightgray');
    $(':root').css('--navbar-active-color', 'yellow');
}
}


// im a software engineer text change event.
function dynamicTextChangeEvent() {
  const roles = ["Software Developer", "Designer", "SEO Analyst"];
  const dynamicText = document.getElementById('dynamic-text');
  let currentRoleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

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
    setTimeout(typeEffect, isDeleting ? 100 : 150); // Adjust typing speed
  }
  typeEffect();
}

function loadingEvent() {
  const roles = ["Loading....", "Lets..", "Go.."];
  const loadingText = document.getElementById('loading-text');
  let currentRoleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const fullText = roles[currentRoleIndex];
    loadingText.textContent = fullText.substring(0, charIndex);
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
    setTimeout(typeEffect, isDeleting ? 100 : 150); // Adjust typing speed
  }
  typeEffect();
}


function modeSwitchToogle(){
	const toggleSwitch = document.getElementById('toggleSwitch');
        const toggleBall = document.getElementById('toggleBall');
        toggleSwitch.addEventListener('click', () => {
            toggleSwitch.classList.toggle('dark-mode');
        });
}

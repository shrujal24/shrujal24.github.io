let isDarkMode = false;
let body = document.body;
let pageLoadBlack = true;
// let mediaQuery = window.matchMedia('(max-width: 750px)');
// mediaQuery.addEventListener('change', isDarkModeCheck);
// Call the function manually once to handle the current state
// isDarkModeCheck(mediaQuery);
const starsContainer = document.getElementById('stars-container');
const toggleText = document.getElementById('toggle-text'); 
const toggleSwitch = document.getElementById('toggleSwitch');
const toggleBall = document.getElementById('toggleBall');
const navbarMiddleColor = document.getElementById('navbarNav');
dynamicTextChangeEvent();
loadingEvent();
modeSwitchToogle();
isDarkModeOnReload();




document.addEventListener("DOMContentLoaded", () => {
    const scrollWrapper = document.querySelector(".scroll-wrapper");

    // Duplicate images dynamically for seamless scroll
    const cloneImages = () => {
        const images = Array.from(scrollWrapper.children);
        images.forEach((image) => {
            const clone = image.cloneNode(true);
            scrollWrapper.appendChild(clone);
        });
    };

    // Ensure seamless transition
    cloneImages();
});





// experience section js code starts

const jobs = {
  "hackConcordia": {
        title: "hackConcordia",
        role: "Director (Marketing): (May 2024 - Current)",
        skills: ".Net Core MVC, .Net MVC, .NET Webforms, ReactJs, Angular, SQL Server, Database Optimization",
        description: [
            "Developed and maintained insurance domain applications using .NET Core MVC, .Net Framework, Angular, SQL Server.Optimizing stored procedures to improve query performance and reduce processing time by 30%. Followed SDLC and Agile methodologies for defect-free coding and enhancements with proper documentation for all processes.",
            "Developed and deployed microservices-based features using .NET Core",
            "Built and consumed RESTful APIs, ensuring seamless integration between services, and performed API testing and debugging using Postman. "
        ]
    },

    "synoEngineer": {
        title: "Synoverge Technologies",
        role: "Software Engineer : (Jun 2021 - Dec 2023)",
        skills: ".Net Core MVC, .Net MVC, .NET Webforms, ReactJs, Angular, SQL Server, Database Optimization",
        description: [
            "Developed and maintained insurance domain applications using .NET Core MVC, .Net Framework, Angular, SQL Server.Optimizing stored procedures to improve query performance and reduce processing time by 30%. Followed SDLC and Agile methodologies for defect-free coding and enhancements with proper documentation for all processes.",
            "Developed and deployed microservices-based features using .NET Core",
            "Built and consumed RESTful APIs, ensuring seamless integration between services, and performed API testing and debugging using Postman. "
        ]
    },
    "synoIntern": {
        title: "Synoverge Technologies",
        role: "Software Engineer Intern : (Feb 2021 - Jun 2021)",
        skills: ".Net MVC, .NET Webforms, HTML/CSS, Javascript, Jquery, Bootstrap",
        description: [
            "Played a crucial role in optimizing database queries in Stored Procedures, Views and Cursors enhancing data retrieval speed and reducing processing time by 25% through efficient indexing and query restructuring (worked with India’s biggest insurance provider project). ",
            "Designed and implemented a complete HTML/CSS front-end layout for a project, ensuring a visually appealing and responsive user experience.",
            "Collaborating with designers to convert beautiful front-end parts."
        ]
    }
};

// Update the job description when a timeline item is clicked
document.querySelectorAll(".timeline-item").forEach(item => {
    item.addEventListener("click", () => {
        const jobKey = item.getAttribute("data-job");
        const job = jobs[jobKey];

        document.getElementById("job-title").innerText = job.title;
        document.getElementById("job-role").innerText = job.role;
        document.getElementById("job-skills").innerText = job.skills;

        const detailsList = document.getElementById("job-details");
        detailsList.innerHTML = ""; // Clear existing details
        job.description.forEach(detail => {
            const li = document.createElement("li");
            li.innerText = detail;
            detailsList.appendChild(li);
        });
    });
});


// experience section js code ends





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


// dowload resume
 document.getElementById('downloadResume').addEventListener('click', function () {
      const pdfUrl = 'Shrujal-Bhandari-SDE.pdf'; // Replace with the actual path to your PDF file
      // Open the PDF in a new tab
      const newTab = window.open(pdfUrl, '_blank');
      // Force download in the new tab
      if (newTab) {
        newTab.onload = function () {
          const link = newTab.document.createElement('a');
          link.href = pdfUrl;
          link.download = 'ShrujalBhandari-Resume.pdf'; // Set the download file name
          link.click();
          newTab.close(); // Close the new tab after initiating the download
        };
      }
    });

 document.getElementById('downloadResume1').addEventListener('click', function () {
      const pdfUrl = 'Shrujal-Bhandari-SDE.pdf'; // Replace with the actual path to your PDF file
      // Open the PDF in a new tab
      const newTab = window.open(pdfUrl, '_blank');
      // Force download in the new tab
      if (newTab) {
        newTab.onload = function () {
          const link = newTab.document.createElement('a');
          link.href = pdfUrl;
          link.download = 'ShrujalBhandari-Resume.pdf'; // Set the download file name
          link.click();
          newTab.close(); // Close the new tab after initiating the download
        };
      }
    });

//const isDarkMode = body.classList.contains('bg-black');

//vibes switch funtion
toggleSwitch.addEventListener('click', () => {
const isDarkModeOn = body.classList.contains('bg-black');
const mediaQuery = window.matchMedia('(max-width: 750px)');
// Access the 'matches' property

  if(mediaQuery.matches) 
  {
    if (isDarkModeOn == false) {
    console.log('The screen width is 750px or smaller');
    $('.blur-bg-menu ').css('background-color', 'black');
    $('.fa-bars:before').css('background-color', 'white');
    } 
    else {
    $('.blur-bg-menu ').css('background-color', 'white');
    $('.fa-bars:before').css('background-color', 'transparent');
    }
  }
  else{
    $('.blur-bg-menu ').css('background-color', 'transparent');
  }
	
	// toggleSwitch.classList.toggle('light-mode');
	// toggleSwitch.classList.toggle('dark-mode');
	//document.body.style.backgroundColor = toggleSwitch.classList.contains('light-mode') ? '#ffffff' : '#1e3c72';
	// toggleSwitch.classList.toggle('dark-mode');
	body = document.body;
	isDarkMode = body.classList.contains('bg-black');
  pageLoadBlack = false;
	isDarkModeCheck(mediaQuery);

});


function isDarkModeOnReload()
{
  const isDarkModeOn = body.classList.contains('bg-black');
  const mediaQuery = window.matchMedia('(max-width: 750px)');
// Access the 'matches' property

  if(mediaQuery.matches) 
  {
    if (isDarkModeOn == false) {
      //lightmode
    console.log('The screen width is 750px or smaller');
    $('.blur-bg-menu ').css('background-color', 'white');
    $('.fa-bars:before').css('background-color', 'white');
    } 
    else {
      //lightmode
    $('.blur-bg-menu ').css('background-color', 'black');
    $('.fa-bars:before').css('background-color', 'transparent');
    }
  }
  else{
      //fullscreenMode
    $('.blur-bg-menu ').css('background-color', 'transparent');

  }
  
  body = document.body;
  isDarkMode = body.classList.contains('bg-black');
  isDarkModeCheck(mediaQuery);
}

function isDarkModeCheck(){
	//const isDarkMode = body.classList.contains('bg-black');
	if (isDarkMode && pageLoadBlack == false ) {
  //Light Mode on
  body.classList.remove('bg-black', 'text-white');
  body.classList.add('bg-white', 'text-black');
  //toggle.classList.remove('dark');
  $(':root').css('--navbar-text-color', 'black');
  $('.navbar-toggler').css('color', 'black');
  $('.navbar-brand').css('color', 'black');
  $(':root').css('--navbar-text-hover-color', 'gray');
  $(':root').css('--navbar-active-color', 'blue');
  $('.vertical-line').css('background-color', 'black');
  $('.homeActive').css('color', 'black');
  $('.jumbotron').css('border', 'solid');
  $('.jumbotron').css('background-color', 'gold');
  $('.jumbotron').css('border-color', 'burlywood');
  $('.description-section').css('color', 'black');
  $('.description-section').css('background-color', 'gold');
  $('.display-5').css('color', 'black');
  $('.lead').css('color', 'black');
  $('.contact-section').css('background-color', 'white');
  $('.card-content').attr('style', 'background-color: gold; !important');
  $('.card-content').attr('style', 'border-color: black;');
  $('.cardtext').attr('style', 'color: black;');
  $('.cardtextexp').attr('style', 'color: black;');
  $('.contact-container').attr('style', 'background-color: gold;');
  $('.contactText').attr('style', 'color: black;');
  $('.contactBtn').attr('style', 'background-color: white;');
  $('.timeline-content').attr('style', 'border-color: gainsboro;');
  $('.formColor').attr('style', 'background-color: white;');
  $('.footer-section').attr('style', 'background-color: white;');

  // $('.blur-bg-menu ').css('background-color', 'transparent');
   toggleSwitch.classList.toggle('light-mode');

  removeGalaxyBackground();
    	
	} 
	else {
  //dark mode On
	body.classList.remove('bg-white', 'text-black'); 
	body.classList.add('bg-black', 'text-white'); 
	//toggle.classList.add('dark');
	// document.documentElement.style.setProperty('--navbar-text-color', 'white');
  $(':root').css('--navbar-text-color', 'white');
  $('.navbar-toggler').css('color', 'white');
  $(':root').css('--navbar-text-hover-color', 'lightgray');
  $(':root').css('--navbar-active-color', 'gold');
  $('.vertical-line').css('background-color', 'white');
  $('.homeActive').css('color', 'white');
  $('.navbar-brand').css('color', 'white');
  $('.jumbotron').css('border', 'solid');
  $('.jumbotron').css('background-color', 'black');
  $('.jumbotron').css('border-color', 'gold'); //frameborder
  $('.dynamic-container text-white').css('color', 'gold');
  $('.description-section').css('color', 'black');
  $('.contact-section').css('background-color', 'black');
  $('.description-section').attr('style', 'background-color: rgba(255, 255, 255, 0.10);');
  $('.display-5').css('color', 'white');
  $('.lead').css('color', 'white');
  $('.cardtext').attr('style', 'color: white;');
  $('.cardtextexp').attr('style', 'color: black;');
  $('.contact-container').attr('style', 'background-color: rgba(255, 255, 255, 0.1);');
  $('.contactText').attr('style', 'color: white;');
  $('.card-content').attr('style', 'border-color: white;');
  $('.timeline-content').attr('style', 'border-color: snow;');
  $('.contactBtn').attr('style', 'background-color: gold;');
  $('.formColor').attr('style', 'background-color: white;');
  $('.footer-section').attr('style', 'background-color: black;');
  toggleSwitch.classList.toggle('dark-mode');

  // $('.blur-bg-menu ').css('background-color', 'transparent');
    addGalaxyBackground();
}
}



function addGalaxyBackground() {
  starsContainer.innerHTML = ''; // Clear any existing stars
  for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = Math.random() * window.innerHeight + 'px';
      star.style.left = Math.random() * window.innerWidth + 'px';
      star.style.animationDuration = Math.random() * 5 + 5 + 's';
      starsContainer.appendChild(star);
  }
}

function removeGalaxyBackground() {
    starsContainer.innerHTML = ''; // Clear all stars
}


// im a software engineer text change event.
function dynamicTextChangeEvent() {
  const roles = ["Software Engineer","Full-Stack Developer", "Designer", "Homo Sapien"];
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


function sendMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    const mailtoLink = `mailto:bhandarishrujal@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`;
    window.location.href = mailtoLink;
  } else {
    alert('Please fill out all fields before sending the message.');
  }
}

window.onload = () => {
    toggleSwitch.classList.add('dark-mode'); // Simulate toggle switch press
    isDarkModeCheck(pageLoadBlack); // Apply dark mode styles
  };

let isDarkMode = false;
let body = document.body;
// let mediaQuery = window.matchMedia('(max-width: 750px)');
// mediaQuery.addEventListener('change', isDarkModeCheck);
// Call the function manually once to handle the current state
// isDarkModeCheck(mediaQuery);
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
    "gdg-president": {
        title: "Synoverge Technologies",
        role: "Software Engineer - (Jun 2021 - Dec 2023)",
        skills: ".Net Core MVC, .Net MVC, .NET Webforms, ReactJs, Angular, SQL Server, Database Optimization",
        description: [
            "Developed and maintained insurance domain applications using .NET Core MVC, .Net Framework, Angular, SQL Server.Optimizing stored procedures to improve query performance and reduce processing time by 30%. Followed SDLC and Agile methodologies for defect-free coding and enhancements with proper documentation for all processes.",
            "Developed and deployed microservices-based features using .NET Core",
            "Built and consumed RESTful APIs, ensuring seamless integration between services, and performed API testing and debugging using Postman. "
        ]
    },
    "cheffery": {
        title: "Cheffery",
        role: "Software Engi Intern - (Feb 2021 - Jun 2021)",
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
      const pdfUrl = 'pdf/Software-Engineer-Shrujal.pdf'; // Replace with the actual path to your PDF file
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
    } 
    else {
    $('.blur-bg-menu ').css('background-color', 'white');
    }
  }
	
	toggleSwitch.classList.toggle('light-mode');
	toggleSwitch.classList.toggle('dark-mode');
	//document.body.style.backgroundColor = toggleSwitch.classList.contains('light-mode') ? '#ffffff' : '#1e3c72';
	toggleSwitch.classList.toggle('dark-mode');
	body = document.body;
	isDarkMode = body.classList.contains('bg-black');
	isDarkModeCheck(mediaQuery);

});


function isDarkModeOnReload()
{

}

function isDarkModeCheck(e){
	//const isDarkMode = body.classList.contains('bg-black');
	if (isDarkMode) {
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
    	// if(e.matches)
	    // {
	    // $('.blur-bg-menu ').css('background-color', 'white');
	    // }
	} 
	else {
	body.classList.remove('bg-white', 'text-black'); 
	body.classList.add('bg-black', 'text-white'); 
	//toggle.classList.add('dark');
	// document.documentElement.style.setProperty('--navbar-text-color', 'white');
	$(':root').css('--navbar-text-color', 'white');
	$('.navbar-toggler').css('color', 'white');
	$(':root').css('--navbar-text-hover-color', 'lightgray');
    $(':root').css('--navbar-active-color', 'yellow');
    $('.vertical-line').css('background-color', 'white');
    $('.homeActive').css('color', 'white');
	$('.navbar-brand').css('color', 'white');
    $('.jumbotron').css('border', 'solid');
    $('.jumbotron').css('background-color', 'black');
    $('.jumbotron').css('border-color', 'gold'); //frameborder
    $('.dynamic-container text-white').css('color', 'gold');
    $('.description-section').css('color', 'black');
   	//navbarMiddleColor.style.backgroundColor  = 'black';
    // if(e.matches)
	//     {
	//         $('.blur-bg-menu ').css('background-color', 'black');
	//     }
}
}


// im a software engineer text change event.
function dynamicTextChangeEvent() {
  const roles = ["Software Engineer", "Designer", "Homo Sapien"];
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

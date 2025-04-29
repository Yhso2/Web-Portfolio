const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

//  Store color theme for future visits

function switchTheme(e) {
  document.body.classList.add('user-interacted');
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// Hides / Shows the toggle switch based on the current theme

const currentTheme = localStorage.getItem("theme") 
  if (currentTheme === "light") {
    toggleSwitch.checked = true;
  }
  else {    
    toggleSwitch.checked = false;
 }


  // Home link
const homeLink = document.getElementById('home-link');

  homeLink.addEventListener('click', function (e) {
    const onHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

    if (onHomePage) {
      e.preventDefault(); // stop reload
      window.scrollTo({ top: 0, behavior: 'smooth' }); // smoothly scroll up
    }
  });

 // Blurry navbar to be added
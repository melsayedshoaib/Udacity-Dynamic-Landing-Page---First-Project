/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */
/**
 * Define Global Variables
 *
 */
// Getting All Section Elements Dynamically
const sectionGroup = Array.from(document.querySelectorAll("section"));
// Getting ul to nest our group of li's inside of it
const itemsGroup = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// Creating Navbar Link Items Dynamically
function creatingListItems() {
  for (let section of sectionGroup) {
    let sectionName = section.getAttribute("data-nav");
    let sectionLink = section.getAttribute("id");
    let itemLinks = document.createElement("li");
    let itemSources = document.createElement("a");
    itemSources.classList.add("menu__link");
    itemSources.setAttribute("href", `#${sectionLink}`);
    itemSources.textContent = `${sectionName}`;
    itemLinks.appendChild(itemSources);
    itemsGroup.appendChild(itemLinks);
  }
}
creatingListItems();
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// Activating The Viewport Section
window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (element) {
    if (
      element.getBoundingClientRect().top >= -400 &&
      element.getBoundingClientRect().top <= 150
    ) {
      element.classList.add("your-active-class");
    } else {
      element.classList.remove("your-active-class");
    }
  });
};
// Getting Anchors In Our DOM And Add Event Listener On Them
const links = document.querySelectorAll(".menu__link");
links.forEach(function (ele) {
  ele.addEventListener("click", smoothScroll);
});
// This Is The Main Function To Make The Scrolling Smooth When Clicking On One Of The Anchors
function smoothScroll(e) {
  e.preventDefault();
  const anch = this.getAttribute("href");
  const offsetTop = document.querySelector(anch).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
// build the nav
// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu
// Scroll to section on link click
// Set sections as active

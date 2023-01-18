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
// Getting The Starting Time Of The Performance
let startingTime = performance.now();
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
    itemSources.addEventListener("click", function () {
      itemSources.classList.add("activeLinks");
    });
    itemSources.onblur = function () {
      itemSources.classList.remove("activeLinks");
    };
  }
}
// Calling The Function To Create List Of Sections
creatingListItems();

/* 
  The Following Lines Of Code Depicts The Visibilty Of The Navbar While Scrolling And/Or The Invisibility When Stop Scrolling 
*/
let topPosition;
navbar = document.getElementsByClassName("page__header");
window.addEventListener("scroll", function () {
  let topScroll = window.pageYOffset || document.documentElement.topScroll;
  if (topScroll > topPosition) {
    navbar[0].style.top = "-150px";
  } else {
    navbar[0].style.top = "0";
  }
  topPosition = topScroll;
});
// A Function To Scroll To Top When Clicking On The Button
const scrollTop = function () {
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "Back To Top";
  scrollBtn.setAttribute("class", "scrolltotop");
  let main = document.getElementsByTagName("main");
  main[0].appendChild(scrollBtn);
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? scrollBtn.classList.add("scrolltotopshow")
      : scrollBtn.classList.remove("scrolltotopshow");
  };
  window.addEventListener("scroll", scrollBtnDisplay);
  const scrollWindow = function () {
    if (window.scrollY !== 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 30);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtn.addEventListener("click", scrollWindow);
};
// Calling The Function
scrollTop();
// Collapsing Sections - Clicking On The Headers (H2) To Collapse And/Or Show The Collapsed Sections
let secHeaders = document.getElementsByTagName("h2");
let i;
for (i = 0; i < secHeaders.length; i++) {
  let secHeader = secHeaders[i];
  secHeader.addEventListener("click", function () {
    this.classList.toggle("active");
    let collapse = this.nextElementSibling;
    if (collapse.style.display === "block") {
      collapse.style.display = "none";
    } else {
      collapse.style.display = "block";
    }
  });
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// Activating The Viewport Section
window.onscroll = () => {
  document.querySelectorAll("section").forEach((element) => {
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
links.forEach((ele) => {
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
// Getting The Ending Time Of The Performance
let endingTime = performance.now();
// Testing The Performanc In The Console Window Which Depicts The Time Code Has Taken To Run In Milliseconds
console.log(`${endingTime - startingTime} milliseconds`);
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

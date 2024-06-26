// Header - Scroll effect
// const header = document.querySelector("header");
// window.addEventListener("scroll", function () {

//     // Get the height of the header.
//     const headerHeight = header.offsetHeight;

//     // Get the current scroll position
//     const scrollPosition = window.scrollY;

//     // Check if the scroll position is greater than or equal to the header height
//     if (scrollPosition >= headerHeight) {
//         header.style.backgroundColor = "var(--BG-COLOR)";
//     }
//     else {
//         header.style.backgroundColor = "transparent";
//     }
// });


// Active Links - Activating Links when user reaces to a particual section of website.
const allSections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-actual-link");

let currentSection = "homeSection";
window.addEventListener("scroll", function () {

    allSections.forEach(function (currSection) {
        if (window.scrollY >= (currSection.offsetTop - currSection.clientHeight / 3)) {
            currentSection = currSection.id;
        }
    });

    // Adding scroll animation class into active sections.
    // this.document.querySelector(".sections-animation").classList.remove("sections-animation");
    this.document.querySelector(`#${currentSection}`).classList.add("sections-animation");


    // Activate Nav link of current section
    navLinks.forEach(function (navLink) {
        if (navLink.href.includes(currentSection)) {
            document.querySelector(".active").classList.remove("active");
            navLink.classList.add("active");
        }
    });

    // Footer Scroll Animation.
    // First, check whether footer is in the viewport or not.
    let footer = document.querySelector(".footer");
    if (this.window.scrollY + this.innerHeight > footer.offsetTop) {
        // console.log("footer is in the viewport");
        footer.classList.add("sections-animation");
    }
    // else {
    //     footer.classList.remove("sections-animation");
    // }
});


// Header - Hamburger Menu
const hamburgerContainer = document.querySelector(".hamburger-menu-container");
const hamburgerOpenButton = document.querySelector("#open-menu-icon");
const hamburgerCloseButton = document.querySelector("#close-menu-icon");
const navLinkContainer = document.querySelector(".nav-links");
let menuClicked = false;
hamburgerContainer.addEventListener("click", function () {

    menuClicked = !menuClicked;
    if (menuClicked) {
        hamburgerOpenButton.style.display = "none";
        hamburgerCloseButton.style.display = "block";
        navLinkContainer.classList.add("activate-navbar");
    }
    else {
        hamburgerOpenButton.style.display = "block";
        hamburgerCloseButton.style.display = "none";
        navLinkContainer.classList.remove("activate-navbar");
    }
});


navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menuClicked = !menuClicked;
        if (menuClicked) {
            hamburgerOpenButton.style.display = "none";
            hamburgerCloseButton.style.display = "block";
            navLinkContainer.classList.add("activate-navbar");
        }
        else {
            hamburgerOpenButton.style.display = "block";
            hamburgerCloseButton.style.display = "none";
            navLinkContainer.classList.remove("activate-navbar");
        }
    });
});
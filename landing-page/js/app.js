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
 * Define Global Variables
 * 
*/

const myUl = document.getElementById("navbar__list");
const secOne = document.getElementById("section1");
const secTwo = document.getElementById("section2");
const secthree = document.getElementById("section3");
let allSections = document.getElementsByClassName("landing__container");
let sectionsObject = {
   counter: 0,
   headname: [],
   sectionids: []
};


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/*Cross-browser Solution For browsers that do not support the scroll-behavior */
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function myBuilder() {

  document.addEventListener('DOMContentLoaded', count_sections);
  function count_sections() {
         for (let i=0; i < allSections.length; i++) {
            sectionsObject.counter += 1;
            /* catch section name */
            let secname = allSections[i];
            let ith = secname.querySelector('h2');
            /* append section name to list */         
            sectionsObject.headname.push(ith.textContent);
            /* push section id to the sections object */
            sectionsObject.sectionids.push(secname.parentElement.id);            
         }
         /* end of section counter */



           /* create the li elements */
         const fragment = document.createDocumentFragment();
         for (let a= 0; a < sectionsObject.counter; a++) {
           const newli = document.createElement("li");
           const newa = document.createElement("a");
           newli.innerText = sectionsObject.headname[a];
		   // Scroll to section on link click
           newa.href = "#" + sectionsObject.sectionids[a];
           newa.appendChild(newli);
           fragment.appendChild(newa);

        }


        myUl.appendChild(fragment);


     }
}

myBuilder();


/* builder function ends here */
/* end */


// Add class 'active' to section when near top of viewport
// Set sections as active

function myFunction() {

myAllSections = document.querySelectorAll('.asection');
var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
    
    
    /*clear any active */
    for (let i=0; i < myAllSections.length; i++) {
      myAllSections[i].classList.remove('your-active-class');
    } 
    
	if(entries[0].isIntersecting === true)
        entries[0].target.classList.add('your-active-class');
	
}, { threshold: [0] });


/* I used this insted of for loop to not repeat the function it self*/
	var targets = [Array.from(document.querySelectorAll('.asection')), Array.from(document.querySelectorAll('.asection'))].flat();
    targets.forEach(target => 
        observer.observe(target));
        


}


myFunction();

# Dynamic Landing Page

This is a dynamic landing page project, as the main focus on building it dynamically using JavaScript.

[Live Preview](https://melsayedshoaib.github.io/Udacity-Dynamic-Landing-Page---First-Project/ "Dynamic Landing Page")

## Usage

- Using and array to store sections and loop through them using for/of loop to create navbar links and link each link with the corresponding section.
- Using a scroll event to hide or show the navbar when scrolling.
- Creating a button as its function to scroll to top when clicking using the event click.
- Using h2 headers in the sections to toggle an active class as when clicking on a certain header, the corresponding section will collapse or show the collapsed section when clicking again, using normal for loop to iterate through each header of a section.
- Using getBoundingClientRect function to be able to activating the viewport section as the section in the viewport will be highlighted with the aid of your-active-class, the change will occur in the sections background.
- Every scrolling movement is smoothly implemented.
- Testing the performance time and print it to the console window.
- With the value -150px, the feature of hiding the navbar while not scrolling is now on the par for all devices even for the devices with 240 X 320 dimensions.

## Dependencies

Mainly I've depended on the Udacity content per se, but here is a list of the external resources that I've used.

- [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect "getBoundingClientRect")
- [pageYOffset](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset "pageYOffset")
- [scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo "scrollTo")
- [scroll to top behavior](https://codepen.io/w3collective/pen/eYZvPRv "scroll to top behavior - inspired by W3Collective on Codepen but I have made changes in my own code")
- [hide the navbar while not scrolling](https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp "hide the navbar while not scrolling")

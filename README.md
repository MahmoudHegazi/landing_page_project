# Landing Page



a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.


# Architecture:

```text

css
- styles.css    
index.html
js
- app.js
README.md

```

# Usability:

All features are usable across modern desktop, tablet, and phone browsers.


# features:
1.  Navigation is built dynamically as an unordered list.
2.  It's clear which section is being viewed while scrolling through the page.
3.  When clicking an item from the navigation menu, the link scroll to the appropriate section.
4.  code is formatted with consistent, logical, and easy-to-read formatting as 
5.  described in the [Udacity JavaScript Style Guide.](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html) 


# what I did:

my JavaScript code can deduce the section numbers added to the page and create a navigation list that contains the section names that contain links that lead you to this section.

When the section enters the viewport, it takes the class your-active-class when it is removed

I used Intersection Observer API to give the best performance

I used also fragment to avoid many re-flow and repaint



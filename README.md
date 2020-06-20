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
5.  described in the Udacity JavaScript Style Guide.


# what I did:

javascript code can dedcect the sections numbers added to the page and create navigation menu contains 
the sections names with links takes you to that section.

when the section enter the viewport it takes class active when it out the class removed

I used Intersection Observer API to give a better preformance 

also I used appended the items to fragment to avoid many reflow and repaint



// Challenge: 
// 1. Update text in the Scrimba mini-browser to match the title of this cast
// 2. Create an h2 with class 'tagline' and text "I can create HTML elements!"
// Add it right under the modified text.
const letsChange = document.querySelector('h1');
letsChange.innerHTML = " Challenge: Creating and Modifying HTML Elements";

const newElement = document.createElement("h2");
newElement.className = 'tagline';
newElement.innerHTML = "I can create HTML Elements";

const post = document.querySelector('tagline');

letsChange.append(newElement);
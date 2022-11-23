/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first' using querySelector
//Result: returns the first element found
const elementByID = document.querySelector("#first");
console.log(elementByID);
// 2. Get the elements with a class of 'second' with querySelector
const elementByClass = document.querySelector(".first");
console.log(elementByClass);
// 3. Try the above prompt with querySelectorAll. What's the difference between
//    what these two methods return?
//Result: NodeList(3) [p#first, h1#first, h2#first]
const elementByIDAll = document.querySelectorAll("#first");
console.log(elementByIDAll);
// 4. Get the span element using querySelector

// 5. Get multiple span elements using querySelectorAll
const getSpan = document.querySelector("span");
console.log(getSpan);
// 6. Select only "a" tags *directly inside* of a div (no grandchildren).
const link = document.getElementById("link-1");
console.log(link);
// 7. Select all elements that contain a "data-target" attribute
const linkBy_Attribute = document.querySelectorAll('[data-link="1"]');
//const link = document.querySelector('[data-link="1"]');
console.log(linkBy_Attribute);
// 8. Select all elements where the data-target attribute equals "#false"
const linkIdAttribute = document.getElementById("#false");
console.log(linkIdAttribute);

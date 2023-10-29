"use strict";
function slugify(title) {
  const lower = title.toLowerCase();
  const slug = lower.replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
  return slug;
}

console.log(slugify("Arrays for beginners")); // Output: "arrays-for-beginners"
console.log(slugify("English for developers")); // Output: "english-for-developers"
console.log(slugify("Ten secrets of JavaScript")); // Output: "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // Output: "how-to-become-a-junior-developer-in-two-weeks"

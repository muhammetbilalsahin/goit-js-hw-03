function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}
console.log(slugify('Arrays for begginners'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

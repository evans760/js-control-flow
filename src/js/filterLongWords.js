// Hardcode an array of words. Have a variable maxLength,
// and push those words to only to an array filter long words.
// Return words less than maxLength.


array = ["Puppies", "a", "Surf", "dog", "Drink", "Sun"];

for (var i = 0, maxLength = 6; i < array.length; i++) {
  if(array[i].length < maxLength) {
    console.log(array[i]);
  }
}

/*
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
*/
const ourArray = ["Stimpson", "j", ["cat"]];
ourArray.shift();
console.log(ourArray);

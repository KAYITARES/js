/*.unshift() works exactly like .push(), 
but instead of adding the element at the end of the array,
 unshift() adds the element at the beginning of the array.
*/
const ourArray = ["stimpson", "cat", "j"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray);

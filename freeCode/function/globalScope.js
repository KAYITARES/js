/*
In JavaScript, scope refers to the visibility of variables. 
Variables which are defined outside of a function block have Global scope. 
This means, they can be seen everywhere in your JavaScript code.
*/

for (let i = 1; i <= 5; i++) {
  console.log(`Exercise ${i}`);

  for (let z = 1; z <= 5; z++) {
    console.log(`...........starting exercise ........${z}`);
  }
}

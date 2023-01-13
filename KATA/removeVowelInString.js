function disemvowel(str) {
  let vowel = ["a", "i", "u", "o", "e", "A", "I", "U", "O", "E"];
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowel.includes(str[i])) {
      newString += str[i];
    }
  }
  return newString;
}
console.log(disemvowel("This website is for losers LOL!"));

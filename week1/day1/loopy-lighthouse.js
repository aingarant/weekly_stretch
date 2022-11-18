// Jeremy & Aingaran worked on refactoring code
// with the assistance of Mentor Ahana.

const loopyLighthouse = function(range, multiples, words) {
  //range = start and end values of loop
  for (let i = range[0]; i <= range[1]; i++) {
  //multiples = which numbers you want to replace with words
  //words = which words to replace the multiples with
    const multiple1 = i % multiples[0] === 0;
    const multiple2 = i % multiples[1] === 0;
    let string = "";
    if (multiple1 && multiple2) {
      string = words[0] + words[1];
    } else if (multiple2) {
      string = words[1];
    } else if (multiple1) {
      string = words[0];
    } else {
      string = i;
    }
    console.log(string);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
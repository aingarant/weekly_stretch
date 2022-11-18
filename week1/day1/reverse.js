// week 1, day 1 stretch
// reverse string

const args = process.argv;

args.forEach(((arg, index) => {
  if (index > 1 && index < args.length) {

    let output = "";

    for (let i = arg.length - 1; i >= 0; i--) {
      output += arg[i];
    }
    console.log(output);
  }
}));
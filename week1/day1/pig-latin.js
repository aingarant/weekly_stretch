const args = process.argv;

args.map(((arg, index) => {
  if (index > 1 && index < args.length) {

    let output = "";

    output = arg.substring(1) + arg.charAt(0) + "ay";

    console.log(output);
  }
}));
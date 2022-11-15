const args = process.argv;


const piglatin = (args) =>
{

args.map(((arg, index) => {
  if (index > 1 && index < args.length)  arg.substring(1) + arg.charAt(0) + "ay";
}));
}
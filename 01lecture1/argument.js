//passing an arguemnt (node arguement.js name=saif) in the terminal and using process.argv to print it 
/*
it shows 3 arguments
1.directory where node is installed
2.directory of which file is being executed
3.directly passed argument
and using slice() to print specific arguement from an array
*/
// console.log(process.argv.slice(2)[0]);

// //using forEach to print all
// process.argv.forEach((val,index)=>{
//   console.log(`${index}:${val}`)  
// });

/*as we can see we are getting values of all three but like (name=saif) this,if we want only the value 
ex:name=saif==> saif,only the answer
to do that we have a packgae called mininst
*/
import minimist from "minimist";
const argNew = minimist(process.argv.slice(2));
console.log(argNew.name)

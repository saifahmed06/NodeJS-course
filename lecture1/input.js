/*Method 1
 import readline from  "readline-sync";

const name = readline.question("your name")
console.log(name)
*/
/*/method 2

import readline1 from  "readline";

const r1 =readline1.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.question("What is your name",(name)=>{
    console.log(`hI ${name}`);
    r1.close();
})
*/
//METHOD 3
import prompt from "prompt-sync";

const name = prompt('your name')
console.log(name)

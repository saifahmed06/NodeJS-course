/*
const x ="1";
const y ="2";
console.log(x,y);

//%s format variable to string
//%d
//%i
//%o
console.log("i am %s and my age is %d","Saif",24);
console.clear();
//////////////////////////
console.count("I am saif")
console.count("I am saif")
console.count("I am saif")
console.count("I am Ahmed")
console.count("I am Ahmed")
console.countReset("I am saif");
console.count("I am saif");
console.count("I am saif");

///////////////////////////////////
const function1 = ()=> console.trace();
const function2 = () => function1();

function2();
console.clear();

*//////////////////
//calculate time taken to execute a function
/*

const sum = () => console.log(`The sum of 2 and 3 is: ${2+3}`);
const multpltn = () => console.log(`The multiplication of 2 and 3 is: ${2*3}`)

const measureTime = ()=>{
    console.time("sum()");
    sum();
    console.timeEnd("sum()");

    console.time("multpltn()");
    multpltn();
    console.timeEnd("multpltn()")
};
measureTime();
//This is how you can show the execution time of your function
*///////////////////////////
//PROGRESS BAR
import chalk from "chalk";
import PROGRESS from "progress";
// import ProgressBar from "progress/lib/node-progress";
const bar = new PROGRESS("downloading [:bar] :rate/bps :percent :etas",{
    total:100,
});
const timer = setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
}, 100);
console.log(chalk.bgYellowBright("This is nodeJS tutorial"))
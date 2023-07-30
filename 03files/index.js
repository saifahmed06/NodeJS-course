import path from "path";
const filePath ="/home/saif/NodeJS_Course/03files/sample.txt"

// //dirname
// console.log(path.dirname(filepath));

// //basename
// console.log(path.basename(filepath));

// //extension
// console.log(path.extname(filepath));

//path join
// const sampleFile = "sample.txt";
// console.log(path.join(path.dirname(filepath)),"+", sampleFile)

/////////////////////////////////////////////////////////
//File System
//import fs from "fs";
//console.log(fs);
//Reading from a file - Async
// fs.readFile(filePath, (err,data) => {
//     if(err) throw new Error("Something went wrong !")

//     console.log(data.toString());//USE toString() to convert output into string so we can read
// })

//or METHOD 2
//instead of using toString(), we can use "utf-8"

// fs.readFile(filePath,"utf-8",(err,data) => {
//     if(err) throw new Error("Something went wrong !");
//      console.log(data);//USE toString() to convert output into string so we can read
// });
// //above method was asynchronos 
// //below is synchronous

// ;
// // try{
// //     const data = fs.readFileSync(path.join(__dirname,"files","sample.txt"));
// //     console.log(data)
// // } catch(err){
// //     console.log(err);
// // }


// //////////////MEthod 3
// import fsPromise from "fs/promises"

// const filereading = async() =>{
// try{
//     const data = await fsPromise.readFile(filePath,{encoding:"utf-8"});
//     console.log("fs Promises:",data)
// }catch(err){
// console.log(err)
// }
// }
// filereading()

////////////////
//Writing into file
// const txtFile ="/home/saif/NodeJS_Course/03files/text.txt"
// const content ="i love this nodeJS tutorial series"

// fs.writeFile(txtFile,content,(err) => {
//     if(err) throw new Error("Something went wrong !");
//      console.log("write operation completed succesfully");
//      fs.readFile(txtFile,"utf-8",(err,data)=>{
//         if(err) throw new Error(err);
//         console.log(data);
//      })
// });
//above code was used to write content in txt file and give us message that operation done and also read thae the content for us

//now lets do the same thing in a convinient way by usuing promises
// const txtFile ="/home/saif/NodeJS_Course/03files/text.txt"
// const content ="i love this nodeJS tutorial series"
// import fsPromise from "fs/promises"
// const writingInfile = async() =>{
//     try{
//         await fsPromise.writeFile(txtFile,"\n it's awesome!",{flag: "a+"});
//         await fsPromise.appendFile(txtFile, "\n this is file appender");
//         const data = await fsPromise.readFile(txtFile);
//         console.log(data.toString())

//     }catch(err){
//         console.log(err)
//     }
    
// };
// writingInfile()




////////////////////////////////////////
//HOW TO RENAME A FILE
// const txtFile ="/home/saif/NodeJS_Course/03files/text.txt"
// const content ="i love this nodeJS tutorial series"
// import fsPromise from "fs/promises"
// import { runInNewContext } from "vm";


// const writingInfile = async() =>{
//     try{
//         await fsPromise.writeFile(txtFile,"\n we have given new name to a file",{flag: "a+"});
//        // await fsPromise.appendFile(txtFile, "\n this is file appender");
//        await fs.promises.rename(txtFile,path.join(txtFile,"03files","Newtext.txt"))
//         const data = await fsPromise.readFile(path.join(txtFile,"03files","Newtext.txt"));
//         console.log(data.toString())

//     }catch(err){
//         console.log(err)
//     }
    
// };
// writingInfile()

// renameFile.js usinf chatGPT
import fs from 'fs/promises';
const textFile = "/home/saif/NodeJS_Course/03files/text.txt"

async function renameFile(textFile, newFileName) {
  try {
    await fs.rename(textFile, newFileName);
    console.log(`File "${textFile}" renamed to "${newFileName}" successfully.`);
  } catch (error) {
    console.error(`Error renaming file: ${error.message}`);
  }
}

// Example usage:
const oldFileName = 'old-file.txt';
const newFileName = 'new-file.txt';

renameFile(textFile, newFileName);

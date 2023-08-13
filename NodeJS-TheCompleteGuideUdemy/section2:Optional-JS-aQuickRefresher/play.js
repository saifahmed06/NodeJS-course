// var name ='saif';
// var age = 23;
// var hasHobbies = true;

// // function summerizeUser(Username,Userage,UserHasHobbies){
// //     return(
// //         'Name is '+Username+' age is '+Userage+' and the user has hobbies:'+UserHasHobbies
// //     );
// // }
// // console.log(summerizeUser(name,age,hasHobbies));

// //  const summerizeUser = function(Username,Userage,UserHasHobbies){
// //     return(
// //         'Name is '+Username+' age is '+Userage+' and the user has hobbies:'+UserHasHobbies
// //     );
// // }
// // console.log(summerizeUser(name,age,hasHobbies));

// const summerizeUser = (Username,Userage,UserHasHobbies)=>{
//     return(
//         'Name is '+Username+' age is '+Userage+' and the user has hobbies:'+UserHasHobbies
//     );
// }
// console.log(summerizeUser(name,age,hasHobbies));




// /////////////////////////
// const add = (a,b)=>{
//     return a+b;
// }
// console.log(add(1,2))
// /////////////
// const add2 = (a,b)=>a+b;
// console.log(add2(2,3))
// ////////////////
// const addOne = a=>a+1;
// console.log(addOne(10))
// ///////////////////
// const addRandom =()=>1+2;
// console.log(


    //OBJECTS
    const person = {
        name: "saif",
        age: 24,
        greet(){
            console.log('Hi i am ' + this.name );
        }
    };
 person.greet();

 const hobbies = ['sports','cooking'];
for(let hobby of hobbies){
    // console.log(hobby)
}
// console.log(hobbies.map(hobby=>'hobby: ' + hobby));
// console.log(hobbies);

// const copiedArray = hobbies.slice();
// console.log(copiedArray);

const copiedArray = [...hobbies];
console.log(copiedArray)

const copiedPerson = {...person}
console.log(copiedPerson);

// const toArray = (arg1,arg2,arg3)=>{
//     return[arg1,arg2,arg3];

// };
// console.log(toArray(1,2,3,4));

const toArray = (...args)=>{
    return[args];

};
console.log(toArray(1,2,3,4));
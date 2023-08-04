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
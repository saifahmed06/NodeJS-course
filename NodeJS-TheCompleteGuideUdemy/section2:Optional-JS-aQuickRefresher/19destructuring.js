const person = {
    name: "saif",
    age: 24,
    greet(){
        console.log('Hi i am ' + this.name );
    }
};
const person2 = {
    name: "ahmed",
    age: 25,
    greet(){
        console.log('Hi i am ' + this.name );
    }
};


//DESTRUCTURING OBJECTS

// const printName = (personData)=>{
//     console.log(personData.name);
// }
// printName(person2);


// const printName = ({name,age})=>{
//     console.log(name,age);
// }
// printName(person2);




// const {name,age}=person;
// console.log(name,age)

//DESTRUCTURING ARRAYS
const hobbies = ['coding','travelling']

const[hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2)


Full name	    : Mohammed Saif Ahmed Father’s 
name            : Mohammed Shareef  Ahmed 
Date of birth	: 08/01/2000
Gender	        : Male 
Marital Status  : Single 
Nationality	    : Indian
Languages	    : English,Hindi and Telugu 
Phone	        : +91-7997136828
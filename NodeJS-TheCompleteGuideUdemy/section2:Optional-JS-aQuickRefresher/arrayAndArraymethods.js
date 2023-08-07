const person = {
    name: 'saif',
    age: 23,
    greet(){
        console.log(`Hi! My name is ${this.name}`)
    }
}
person.greet() // Hi! My name is saif

const hobbies = ['Sports','Cooking'];
// for(let hobby of hobbies){
//     console.log(hobby)
// }
console.log(hobbies.map(hobby=> 'Hobby: ' + hobby));
console.log(hobbies);
hobbies.push('Programming')
console.log(hobbies)
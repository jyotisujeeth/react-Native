// const myName = "dindogdig";
// console.log(myName);

// myName= "sujeeth"
// console.log(myName);

// destructuring for array 

// const numbers =[1, 2, 3, 4];
// //[num1, , , num4]= numbers;
// [num1, num2, num3, num4] = numbers;
// console.log( num1, num4);

// spread and rest operators 

// rest operator is used to marge a list of function arguments into an array

// const numbers= [1, 2, 3, 4];
// const newnum =[...numbers, 2,2,4,5];
// console.log(newnum);

// for object 

// const person ={
//     name: 'John'
// };

// const newperson = {
//     ...person,
//     age: 28
// }

// console.log(newperson);

// rest operatoress

// const fillter = (...args) => {
//     return args.filter(el => el === 1);
// }

// console.log(fillter(1, 2, 3, 1, 5));// use for function argument

// const num=[1,2,3,4]
// const dumnum = num.map((n) => { 
// return n*2;
// });

// console.log(dumnum);


// const student1 = {

// name : 'Yash',

//   age: '25'

// } 



// function changeAge(studentObj){

// studentObj.age = '30'

// }



// changeAge({ ...student1 } )



// console.log(Student1.age)


const studentArr = [
  {
    name: "Yash",

    age: "25",
  },

  {
    name: "Vaibhav",

    age: "23",
  },
];

function changeAge(studentObj) {
  studentObj.age = "30";
}

changeAge(studentArr[0]);

console.log(StudentArr[0].age);

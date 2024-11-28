//primitives
//numbrs, strings, boolean
//arrays, tuples, enums
//any, void, null, undefined, never
//object

//primitives
let age: number = 12;
let userName: string = 'Max';
let isInstructor: boolean = true;

//More complex types

//arrays
let hobbies: string[] = ['Sports', 'Cooking'];


//objects
let person: {
    name: string;
    age: number;
} = {
    name: 'Max',
    age: 32
};

// let persons :{
//     name:string;
//     age:number;
// }[] = [{name:'Max', age:32}, {name:'Manu', age:30}];

//Type inference
let course = 'React - The complete guide';
//course = 1234; //error
//Union types
let courseName: string | number = 'React - The complete guide';
courseName = 1234;

//Type Aliases

type Person = {
    name: string;
    age: number;
};

let persons: Person[] = [{ name: 'Max', age: 32 }, { name: 'Manu', age: 30 }];

//Functions & types

function add(a: number, b: number) { // can add return type as well by adding :number after the brackets
    return a + b; //return type is inferred as number
}

function printOutput(value: any) { // return type is void because we are not returning anything
    console.log(value);
}

//Generics
// function insertAtBegining(array:any[], value:any)
function insertAtBegining<t>(array:t[], value:t)
{
    const newArray = [value, ...array];
    return newArray;
}
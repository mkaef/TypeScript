export{}

let name = 'Sam';
console.log ('hello ${name}');

// Variables

let a = 10
a = 10;

let x;
x = 10;

let num1 : number = 20;

let myName: string = 'Sam';

let learningTypeScript: boolean = true;

let u: undefined = undefined;
let n: null = null;

let y;
console.log(y)                  // undefined value

let z = null
console.log(z);

// arrays

let list1: number[] = [1,2,3,4];
let list2: Array<number> = [1,2,3,4,5];
console.log(list1[2]);

// tuple
let tuple1: [number, string]; // declare
tuple1 = [10, 'hello' ];

// enum
enum Color {Blue, Green, Yellow};
let c: Color = Color.Green;
console.log(c);

// unknown

let notSure: unknown = 6;
console.log(notSure);

// any

let anyVal: any;
anyVal = 10;
anyVal = 'hello';
anyVal = true;

anyVal()
anyVal.toUpperCase();

// void

function  myFunc(): void{
      console.log('hello');
}

// union types

let peopleAllowed: number|boolean;
peopleAllowed = 20;
peopleAllowed = true;

// functions

function hello(){
    console.log ('hello')
}

hello();

function sum(num1: number, num2?: number): number{
    if(num2)
       return num1+num2
    else
        return num1
}

console.log (sum(4,5));

// interface
interface employee{
    firstName: string;
    lastName: string;
    Id: number
}

function getEmployeeDetails(empDetails:employee){
    console.log(empDetails.firstName);
    console.log(empDetails.lastName);
    console.log(empDetails.Id);
}

getEmployeeDetails({
    firstName:'Sam',
    lastName:'Tommy',
    Id:2001

})

// classes

class Emplpyee{
    employeeName: string;

    constructor(name){
        this.employeeName = name

    }

    hello(){
        console.log('hello ${this.employeeName}')
    }
}

let emp1 = new Emplpyee('Sam');
console.log(emp1.employeeName)
emp1.hello()

class Manager extends Emplpyee{
    constructor(name){
        super(name);
    }

    greet() {
        console.log('hello from manager')
        
    }
         

}

let manager1 = new Manager('Bobby')
console.log(manager1.employeeName)
manager1.hello();
manager1.greet();
















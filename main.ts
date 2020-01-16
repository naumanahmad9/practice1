export { }

let message = 'welcome back Elliot';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'My Title';

let isBeginner: boolean = true;
let total: number;
let name: string = 'John Doe';

let sentence: string = `My name is ${name}
Lorem ipsum dolor sit amet`;

console.log(sentence);

let number: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Chris', 22]
console.log(person1);

enum pos { one, two, three }
let pos1: pos = pos.one
let pos3: pos = pos.three
console.log(pos1, pos3);

enum Color { Red = 5, Green, Blue };
let c: Color = Color.Green;
let r: Color = Color.Red
console.log(c, r);

let randomValue: any = 10;
randomValue = true;
randomValue = 'John Doe'
/*
let myVar: unknown = 10;

(myVar as string).toUpperCase()

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVar)) {
    console.log(myVar.name);
}
*/
let multiType: number | boolean;
multiType = 2;
multiType = false;

function add (num1: number, num2: number): number {
    return num1 + num2;
}
add(5, 10); 

function addition (num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
    else 
        return num1
}
addition(5); // returns 5

function addVal (num1: number, num2: number = 10): number {
    if (num2)
        return num1 + num2;
    else 
        return num1
}
addVal(5); // returns 15

// interface
interface Person {
    fName: string,
    lName?: string
}

/*
function fullName(person: {fName: string, lName:string}) {
    console.log(`${person.fName} ${person.lName}`);
}
*/
function fullName(person: Person) {
    console.log(`${person.fName} ${person.lName}`);
}
let p = {
    fName: 'John',
    lName: 'Doe'
};

fullName(p);

class Employee {
    public empName: string;

    constructor(name: string) {
        this.empName = name;
    }

    greet() {
        console.log(`Good Morning ${this.empName}`);        
    }
}

let emp1 = new Employee('John');
console.log(`Employee name: ${emp1.empName}`);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks ${this.empName}`);
    }
}

let m1 = new Manager('Doe');
m1.delegateWork();
m1.greet();
console.log(`Manager name: ${m1.empName}  ${emp1.empName}`);

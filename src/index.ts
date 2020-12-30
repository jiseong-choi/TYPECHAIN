/*
Typescript 
typescript is superset of javascript
You need to declare the type of values, returns so on.
*/

const sayHi = (name:string, age:number, gender?:string):string => {
    /*
    In typescript if we don't declare the type of the value 
    they throw the warning to me like this
    "Parameter 'name' implicitly has an 'any' type, but a better type may be inferred from usage."
    It is benefit of using Typescript. We can declare the type of the value like this "name:string".
    We can also declare the type of return.
    */
    return `Hello ${name},you are ${age}, you are a ${gender}`
}

const text = sayHi("jiseong-choi", 19)
/*
If remove the ? of the parameter it will not run. 
That's why we using Typescript.
These functions make the results of your code more predictable.
*/
/*
Now it is a tip for Typescript. tsc-watch module is good for development tool. 
It keep watching ur code and if it changes then recompile the code.
npm install tsc-watch --save --dev or yarn add tsc-watch --dev
*/
console.log(text)

interface Human {
    name: string, 
    age: number,
    gender: string
}//interface declare the type of something or explain the something

const person = {
    name: "hyuntak",
    age: 26,
    gender: "male"
}

const sayHello = ({name,age,gender}: Human):string => {
    return `Hello ${name},you are ${age}, you are a ${gender}`;
}

const result = sayHello(person) 
console.log(result)

class Man {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string,age:number,gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const jiseong = new Man("jiseong", 19, "male");

console.log(sayHello(jiseong))

export { };


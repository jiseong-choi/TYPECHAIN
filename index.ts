/*
Typescript 
typescript is superset of javascript
You need to declare the type of values, returns so on.
*/

const sayHi = (name, age, gender?) => {
    /*
    In typescript if we don't declare the type of the value 
    they throw the warning to me like this
    "Parameter 'name' implicitly has an 'any' type, but a better type may be inferred from usage."
    */
    console.log(`Hello ${name},you are ${age}, you are a ${gender}`)
}

sayHi("jiseong-choi", 19)
/*
If remove the ? of the parameter it will not run. 
That's why we using Typescript.
*/

export { };

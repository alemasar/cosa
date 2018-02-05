import * as classes from './src/methods';

class Methods {

}

// const mixins = [];
console.log(classes)
const cs = Object.keys(classes);

export const test = Object.assign(Methods, classes.Methods);

console.log(test)

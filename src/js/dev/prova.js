import {test} from './prova1/prova';

const module = new Proxy(test, {
    get: (Target, name, receiver) => {
        const t = new Target();
console.log(t)
        return t[name];
    }
});






document.addEventListener('DOMContentLoaded', (e) => {
    console.log(module.yoqueser(1, 2))
    console.log(module.bar(2, 1))
});

/*
 *document.addEventListener('DOMContentLoaded', (e) => {
 *   console.log('Se ha ejecutado');
 *   const div=document.createElement('DIV');
 *   div.innerHTML='Se ha ejecutado';
 *   document.body.appendChild(div);
 *});
 */


import * as classes from './prova1/src/methods';

const protos = [];


const keys = Object.keys(classes);
keys.forEach((k) => {
    protos.push(new classes[k]());
})


console.log(protos)
const moduleCreate = (...prototypes) => {
    const overrides = {}

    return new Proxy(prototypes[0][0], {  
        set: (target, property, value) => {
            overrides[property] = value

            return true;
        },

        get: (target, property) => {
            const prototype = [overrides].
                concat(protos).
                find((proto) => property in proto);

            if (prototype) {
                return prototype[property]
            }

            return false;
        }
    })
}
const module = moduleCreate(protos)


document.addEventListener('DOMContentLoaded', (e) => {
    console.log(module)
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


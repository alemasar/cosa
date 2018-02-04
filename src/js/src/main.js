const mh = {
    get: (dummyTarget, trapName) => {
        console.log('--------------- GET UTILS ---------------');
        console.log(dummyTarget);
        console.log(trapName);
        //  persistFunc();

        return Reflect[trapName];
    }
}
const dummy = {};
const bh = new Proxy(dummy, mh);
export const state = new Proxy(new Map(), bh);
export const model = (instance, values) => {
    console.log('------------------ Valor de instancia: ' + instance + ' --------------------------');
    console.log(state)
    if (!state[instance]) {
        state[instance] = {...values};
    }
    const proxy = new Proxy(state[instance], {

        /*
         * setPrototypeOf: function (target, prototype){
         *   console.log('---- SETPROTOTYPEOF ----------');
         *   return Reflect['setPrototypeOf'];
         * },
         */
        get: (target, propKey, receiver) => {
            console.log('---- GET ----------');
            console.log(target)
            if (!(propKey in target)) {
                throw new ReferenceError('Unknown property: ' + propKey);
            }
            //            target.model[propKey];

            return Reflect.get(target, propKey, receiver);
            // return obj[prop];
        },
        set: (target, prop, value) => {
            console.log('---- SET ----------');

            /*
             * console.log(prop);
             * console.log(target);
             *       console.log(store.modelo);
             * state.push({ ...value });
             * console.log(target)
             * target.model = value;
             */

            return Reflect.set(target, prop, value);
        }
    });

    // Reflect.setPrototypeOf(proxy, {});

    return proxy;
}


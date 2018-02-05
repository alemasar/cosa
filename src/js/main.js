import { model } from './src/main';

/*
 * export const ev = model(
 *   'instancia',
 *   {
 *       'event': {
 *           'handler':(e) => {
 *               console.log('hola');
 *           },
 *           'type': 'DOMContentLoaded'
 *       }
 *   }
 * );
 */

// console.log(ev.event);
export const event = (handler) => {
    // document.addEventListener('DOMContentLoaded', handler)

    return model(
        'load',
        handler
    );
}

const DOMContentLoadedEvent = document.createEvent("Event");


document.addEventListener('DOMContentLoaded', (e) => {
    console.log(e)
});


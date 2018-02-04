import {model} from './src/main';

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
    return model(
        'load',
        document.addEventListener('DOMContentLoaded', handler)
    );
}

// const DOMContentLoadedEvent = document.createEvent("Event");

// dOMContentLoadedEvent.initEvent("DOMContentLoaded", true, true);

// window.document.dispatchEvent(DOMContentLoadedEvent);

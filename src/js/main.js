import { model } from './src/main';

const ev = model('instancia', {'event': 'hola'});
console.log(ev.event);

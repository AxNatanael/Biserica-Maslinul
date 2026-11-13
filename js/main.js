/** Punto di ingresso: ogni pagina HTML carica solo questo file. */
import { start } from './controller/app.js';

document.documentElement.classList.add('js');
start();

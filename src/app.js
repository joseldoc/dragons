import { addDragons } from './core/utils';
import dragons from './core/dragons';
const main = document.getElementById('main');

document.body.onload = addDragons(main, dragons);

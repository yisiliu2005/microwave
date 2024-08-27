import {scores} from '../../shared.js';

console.log('bed', scores.bed);
console.log('coffee table', scores.table);
console.log('microwave', scores.microwave);
console.log('printer', scores.printer);
console.log('refrigerator', scores.fridge);

if (true) {
    document.getElementById("badEnd").style.display = 'none';
} else {
    document.getElementById("goodEnd").style.display = 'none';
}
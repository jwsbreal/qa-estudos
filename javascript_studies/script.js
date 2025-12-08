// MANIPULATING ARRAYS WITH MAP METHOD ----------------------------------

import { products } from './products.js';

const ids = products.map(product => product.id);
const names = products.map(product => product.name);

console.log(ids); // Output: [1, 2, 3, 4, 5]
console.log(names); // Output: ['Product1', 'Product2', 'Product3', 'Product4', 'Product5']


// MANIPULATING ARRAYS WITH FILTER METHOD ---------------------------

const foods = products

.filter(product => product.category === 'food')
.map(f => f.price)

console.log(foods);


// MANIPULATING ARRAYS WITH REDULCE -----------------------------------

const total = products.reduce((accumulated, prod) => accumulated + prod.price, 0);

console.log(total); // Output: 10
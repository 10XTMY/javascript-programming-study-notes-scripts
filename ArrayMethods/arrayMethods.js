// FILTER ------------------------------------------------------------

const scores = [10, 20, 30, 15, 25, 50, 40, 5];
const filteredScores = scores.filter((score) => { // filter is non-destructive, must be stored in new variable
    //returning true retains that item, false removes it from the returned array
    return score > 20;
});

console.log(filteredScores);

const users = [
    {name: 'tom', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'ken', premium: false},
    {name: 'ryu', premium: true},
];

const premiumUsers = users.filter(user => {
   return user.premium;
});

console.log(premiumUsers);

// MAP ---------------------------------------------------------------

// Map method updates an array into a new array
const prices = [10, 20, 30, 15, 25, 50, 40, 5];
const salePrices = prices.map((price) => {
    // iterates the array and applies the function
   return price / 2;
});

console.log(salePrices);

// reduce price if original price is over n threshold
const products = [
    {name: 'apple', price: 20},
    {name: 'orange', price: 40},
    {name: 'banana', price: 30},
    {name: 'lemon', price: 10},
    {name: 'mango', price: 50},
];

const saleProducts = products.map((product) => {
   if(product.price > 30){
       return {name: product.name, price: product.price / 2};
   } else {
       return {name: product.name, price: product.price};
   }
});

console.log(saleProducts);

// REDUCE ------------------------------------------------------------

const result = scores.reduce((acc, curr) => { // accumulator, current (increasing count, current value)
    if(curr > 20){
        acc++;
    }
    return acc; // gets passed back up top
}, 0); // <-- initial value of the accumulator

console.log(result);

const highScores = [
    {name: 'tom', score: 50},
    {name: 'yoshi', score: 80},
    {name: 'ken', score: 10},
    {name: 'tom', score: 25},
    {name: 'tom', score: 50},
    {name: 'yoshi', score: 80},
    {name: 'ken', score: 10},
    {name: 'tom', score: 25},
    {name: 'tom', score: 50},
    {name: 'yoshi', score: 80},
    {name: 'ken', score: 10},
    {name: 'tom', score: 25}
];

const tomTotal = highScores.reduce((acc, curr) => {
    if(curr.name === 'tom'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(tomTotal);

// FIND --------------------------------------------------------------

// find returns the value of first element in an array that passes a test declared in a callback function
const firstHighScore = highScores.find((score) => {
    return score.score > 50;
});

console.log(firstHighScore);

// SORT --------------------------------------------------------------

let names = []
highScores.forEach((highScore) => {
    if (!names.includes(highScore.name) ){ // only add unique names
        names.push(highScore.name);
    }
});

console.log(names);
names.sort(); // default is alphabetical
console.log(names);
names.reverse();
console.log(names);

console.log(scores);
scores.sort(); // does not sort numbers correctly
console.log(scores);

// highScores.sort((a,b) => {
//     // compares row a with row b to see which comes first
//     // returns a first: -1 (negative num) or b first: 1 (positive number), both the same: 0 no re-ordering
//     if (a.score > b.score) {
//         return -1
//     } else if (b.score > a.score){
//         return 1
//     } else {
//         return 0
//     }
// });

// simplified code of the above
// if b is greater it will return a positive, if lesser a negative, if equal then 0
highScores.sort((a,b) => b.score - a.score);
console.log(highScores);
console.log(scores);
scores.sort((a,b) => a - b);
console.log(scores);

// CHAINING ARRAY METHODS --------------------------------------------

// const filteredProducts = products.filter(product => product.price > 20);
// const promos = filteredProducts.map(product => {
//    return `the ${product.name} is ${product.price / 2} pounds`
// });

// chaining of above code
const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);

// chaining on strings can also work
// as long as the chained methods return the same type and work on the same type

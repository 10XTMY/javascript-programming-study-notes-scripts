alert('hello');
let age = 25; // variable, replaces var
const points = 500; // constant, cannot be reassigned

// 7 Data Types

// Numbers: integers, floats, decimals
    // order of operation - B I D M A S
let result = 5 * (10-3)**2; // brackets first, indicies (squaring), multiplication
console.log(result);
let likes = 10;
likes++;
likes+= 10;
console.log(likes);
    // NaM: not a number ( 5 / hello )
    // concatenate numbers
result = 'the blog has ' + likes + ' likes';
console.log(result);

// Strings: 'hello world'
let stringA = 'Hello';
let stringB = 'world';
let emailString = 'tom@tom.com';
    // concatenation:
console.log(stringA + ' ' + stringB);
    // reference character:
console.log(stringA[0]);
    // return length:
console.log(stringA.length);
    // string methods:
console.log(stringA.toUpperCase(), stringA.toLowerCase());
    // return position of character:
console.log(emailString.indexOf('@'));
    // slice from position 0 to 10:
console.log(emailString.slice(0, 10));
    // sub string position 4 to 14:
console.log(emailString.substring(4, 10));
    // replace the first instance of m with w:
console.log(emailString.replace('m', 'w'));
    // template string (literal)
let titleB = 'boop';
let author = 'beep';
result = `the blog called ${titleB} by ${author} has ${likes} likes`; // note backtick not quotes
console.log(result);
    // html templates
let htmlString = `
    <h2>${titleB}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>`;
console.log(htmlString);

// type conversion:
let score = '100';
console.log(typeof score);
score = Number(score);
console.log(typeof score);
score = String(score);
console.log(typeof score);
console.log(Boolean(score));
score = 0;
console.log(Boolean(score));
score = '0';
console.log(Boolean(score));

// Boolean: true / false
    // stringA.include('');
    // arrayA.include('');
    // stringA > stringB <-- string comparison is done on first letter
    // if later in alphabet it is greater
    // if lower case then greater than upper case
    // age = 25
    // loose comparison (value): age == 25, age == '25', true, true
    // strict comparison (value and type): age === 25, age === '25', true, false

// Null: let age = null; explicitly set to no value

// Undefined: let age; automatically given to variables that have not yet been defined

// Objects: complex data structures - Arrays, Dates, Literals etc.
    // Arrays
let randomData = ['tom', 'parker', 30, 20];
    // convert to string
result = randomData.join(', ');
console.log(result);
    // concatenate
result = randomData.concat(['ken', 'barbie']);
console.log(result);
    // append value
randomData.push('bob');
console.log(randomData);
    // return and remove last value
result = randomData.pop();
console.log(result)
// Symbol: used with objects


// CONTROL FLOW ----------------------------------------------------------------------------

// for loops
const names = ['tom', 'sara', 'holly']
for (let i = 0; i < names.length; i++) {
    let htmlOutput = `<div>${names[i]}</div>`;
    console.log(htmlOutput);
}

// while loops
let i = 0
while (i < names.length) {
    console.log(names[i])
    i++;
}

// do while loops (always executes at least once, even if condition is false
let x = 5; // if x was 4 it would only run once printing x is 4
do {
    console.log('val of x is: ', x);
    x++;
} while (x < 5);

// break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    if(scores[i] === 0) {
        continue; // ignore code below and continue to next in the loop
    }

    if (scores[i] === 100) {
        break; // break out of the for loop entirely
    }
}

// switch

const grade = 'D';

switch (grade) {
    case 'A':
        console.log('You got an A!')
        break;
    case 'B':
        console.log('You got a B!')
        break;
    case 'C':
        console.log('You got a C!')
        break;
    case 'D':
        console.log('You got a D!')
        break;
    default:
        console.log('no valid grade')
        break;
}

// Functions --------------------------------------------------------------

// function declaration
// these functions are hoisted to the top by JS
// even if declared after use
function greet(){
    console.log('yo');
}

// function expression
// these functions are not hoisted
// must be expressed before use
const speak = function() {
    console.log('good day')
};

greet();
speak();

// arguments and parameters
const talk = function(name = 'default') {
    console.log(`good day ${name}`)
};

talk();
talk('tom');

// Arrow Functions

// regular function
// const calcArea = function (radius) {
//     return 3.14 * radius**2;
// }
// arrow function
// replace the word function with => after parameters
const calcArea = (radius) => {
    return 3.14 * radius**2;
};

// if only one parameter and return can be simplified as such because only one line of code:
// const calcArea = radius => 3.14 * radius**2;


// callback functions (passing functions as arguments)

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    console.log(value)
})

// callbacks and foreach

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${person} is at index: ${index}`);
}

// calls the callback function on each element in the array
// people.forEach((person, index) => {
//     console.log(`${person} is at index: ${index}`);
// });
people.forEach(logPerson);

// callback functions in action

// get a reference to the 'ul'
const ul = document.querySelector('.people');

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});

ul.innerHTML = html;


// Objects ----------------------------------------------------------------------------
// JS equivalent of classes and methods within them

// objects can be used like python dictionaries, can contain functions
// const blogs = [ // array
//     {title: 'why my pants itch', likes: 30}, // object
//     {title: '10 things i love about doughnuts', likes: 9000} // object
// ];

// object literal {}
let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@spain.eu',
    location: 'Barcelona',
    blogs: [ // array
        {title: 'why my pants itch', likes: 30}, // object
        {title: '10 things i love about doughnuts', likes: 9000} // object
    ],
    // long form:
    // login: function() {
    //  console.log('the user logged in');
    //  },
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        // ^^using arrow here would mean 'this' refers to the calling object not this object..
        console.log(this.blogs); // 'this' accesses this object's attributes
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

console.log(user);
console.log(user.name);
// below is useful to pass as variable
const key = 'name';
console.log(user['name']);
console.log(user[key]);
// change value
user['name'] = 'sally';
console.log(user['name']);
user.login();
user.logout();
user.logBlogs();


// Math

console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area)); // rounds down
console.log(Math.ceil(area)); // rounds up
console.log(Math.trunc(area)); // removes decimal

// random numbers]

const random = Math.random();

console.log(random); // random float between 0 and 1
console.log(Math.round(random  * 100)); // random num between 1 and 100

// Primitive and Reference Types ----------------------------------------------------------

// Primitives
// numbers, strings, booleans, null, undefined, symbols

// Reference
// all object types: literals, arrays, functions, dates, etc.

// difference is how they are stored in memory
// References are stored on the Heap
// Primitives are stored on the Stack
// When storing a reference type in a variable, a pointer is to the Heap is stored in the Stack

const scoreOne = 50; // stored on the stack
const scoreTwo = scoreOne;  // copy created on the stack, separate variable

// pointer called userOne on the stack, object on the heap
const userOne = {name: 'tom', score: 100};
// pointer called userTwo stored on the stack pointing to userOne object on the heap
const userTwo = userOne;

// rest parameter
const double = (...nums) => {  // ... takes all the arguments and bundles them into a single array
    console.log(nums);
    return nums.map(num => num*2);
}

result = double(1,2,3,4,5,6,7,8,9);
console.log(result);

// srpead syntax (arrays)
const peoples = ['tom', 'bob', 'kelly']
const members = ['mario', 'luigi', ...peoples];
console.log(members);

// spread syntax (objects)
const peoplesObject = {name: 'tom', age: 39, job: 'loser'};
const personClone = {...peoplesObject, location: 'manchester'}; // makes a copy of the object on the heap
console.log(personClone);

// sets, reference class (stack), do not allow duplicates
const namesArray = ['tom', 'bob', 'tom'];

// const namesSet = new Set(namesArray);
// const uniqueNames = [...namesSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

// sets methods and properties
const ages = new Set();
ages.add(20).add(30);
ages.delete(20);
console.log(ages.size);
console.log(ages.has(30));
ages.clear();

const usersSet = new Set([
    {name: 'tom', age: 39},
    {name: 'bob', age: 25}
])

usersSet.forEach(userName => {
    console.log(userName.name, userName.age);
})

// symbols, primitive type, heap
// no two symbols can ever be the same
const symbolOne = Symbol('blah');
const symbolTwo = Symbol('blah');
console.log(symbolOne === symbolTwo);

const objectLiteral = {};
objectLiteral.age = 30;
objectLiteral['belt'] = 'orange';

console.log(objectLiteral);

// using symbols as keys in objects assures all keys are unique
objectLiteral[symbolOne] = 'allo';
objectLiteral[symbolTwo] = 'allo';

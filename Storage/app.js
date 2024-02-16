// store data locally as string data
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// localStorage.removeItem('name'); // gone!
localStorage.clear(); // all gone!

// Stringifying & Parsing Data to Local Storage

const todos = [
    {text: 'play games', author: 'tom'},
    {text: 'play dwdw', author: 'todwdwm'},
    {text: 'play dww', author: 'tdwecewom'},
    {text: 'plewfweay games', author: 'tfewom'},
]

localStorage.setItem('todos', JSON.stringify(todos));

const newTodos = localStorage.getItem(JSON.parse('todos'));

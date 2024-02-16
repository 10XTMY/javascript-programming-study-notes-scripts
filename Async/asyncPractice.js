// function getTodos(resource, callback) {
//
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//         // possible readyStates:
//         // 0 	UNSENT 	Client has been created. open() not called yet.
//         // 1 	OPENED 	open() has been called.
//         // 2 	HEADERS_RECEIVED 	send() has been called, and headers and status are available.
//         // 3 	LOADING 	Downloading; responseText holds partial data.
//         // 4 	DONE 	The operation is complete.
//
//         // HTTP Status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//
//         if(request.readyState === 4 && request.status === 200) {
//             // console.log(request.responseText);
//             // convert JSON response into array of objects
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if (request.readyState === 4) {
//             // console.log('error fetching data');
//             callback('error fetching data', undefined);
//         }
//     });
//
//     // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.open('GET', resource);
//     request.send();
// }


// old method before fetch();
function getTodos (resource) {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            // possible readyStates:
            // 0 	UNSENT 	Client has been created. open() not called yet.
            // 1 	OPENED 	open() has been called.
            // 2 	HEADERS_RECEIVED 	send() has been called, and headers and status are available.
            // 3 	LOADING 	Downloading; responseText holds partial data.
            // 4 	DONE 	The operation is complete.

            // HTTP Status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

            if (request.readyState === 4 && request.status === 200) {
                // console.log(request.responseText);
                // convert JSON response into array of objects
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                // console.log('error fetching data');
                reject('error fetching data');
            }
        });

        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource);
        request.send();
    });
};

console.log(1);
console.log(2);

// chaining promises
getTodos('tom.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('mario.json');
}).then(data => {
    console.log('promises 2 resolved:', data);
    return getTodos('luigi.json');
}).then(data => {
    console.log('promises 3 resolved:', data);
}).catch(err => {
    console.log(err);
});

// getTodos((err, data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// callback HELL [see 'promises' below for solution]
// getTodos('tom.json', (err, data) => {
//    console.log(data);
//    getTodos('mario.json', (err, data) => {
//        console.log(data);
//        getTodos('luigi.json', (err, data) => {
//            console.log(data);
//        });
//    });
// });

// getTodos('luigi.json').then(data => {
//     console.log('promise resolved: ', data);
// }).catch(err => {
//     console.log('promise rejected:', err);
// });
// promises
// const getSomething = () => {
//     return new Promise((resolve, reject) => { // resolve and reject are built in
//         // fetch something
//         resolve('some data');
//         // if error
//         // reject('error');
//     }); // either resolved or rejected
// };

// getSomething().then( (data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// catching errors
// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

console.log(3);
console.log(4);

// NEW METHOD FETCH --------------------------------------------------------------------
// fetch API
// automatically returns a promise
// only rejects on network error
// must handle status responses
fetch('tom.json').then(response => {
    console.log('resolved:', response);
    return response.json(); // returns a promise
}).then(data => {
    console.log('json data:', data);
}).catch(err => {
    console.log(err)
});

// use async await to tidy this up by sectioning off all asynchronous code
async function asyncGetTodos(item){ // async returns a promise
    const response = await fetch(item); // awaits response from fetch to assign to variable
    if (response.status !== 200){
        throw new Error('cannot fetch the data from specified filename')
    }
    const data = await response.json();
    return data;
};

// const asyncGetTodos = async (item) => { // async returns a promise
//     const response = await fetch(item); // awaits response from fetch to assign to variable
//     const data = await  response.json();
//     return data;
// };

asyncGetTodos('tomm.json')
    .then(data => console.log('async resolved:', data))
    .catch(err => console.log('error resolving json', err.message));

console.log(5);
console.log(6);

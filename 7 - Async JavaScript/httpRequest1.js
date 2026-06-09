// request data and consle loggin
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
    
        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200 ){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4){
                reject('error getting resource');
            }   
        });
        
        request.open('GET', resource);
        request.send();
    });
};

// first way

// console.log(1);
// console.log(2);

// getTodos('todos/luigi.json', (err, data) => {
//      console.log(data);
//      getTodos('todos/mario.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/shaun.json', (err, data) => {
//             console.log(data);
//         });
//      });
// });

// console.log(3);
// console.log(4);

// second way chaining promises

getTodos('todos/luigi.json').then(data => {
    console.log('promise resolved: ', data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('promise 2 resolved: ', data);
    return getTodos('todos/shaun.json');
}).then(data => {
        console.log('promise 3 resolved: ', data);
}).catch(err => {
    console.log('promise rejected', err);
})

// promise example

// const getSomething = () => {
//     return new Promise( (resolve, reject) => {
//         // fetch somehting  (finding something)
//         resolve('some data');
//         // reject('some error');
//     });
// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then( data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });
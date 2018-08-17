const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('This is my rejected data.');
        resolve('This is my other resolved data.');
    }, 1500);
    
});

console.log('before');

promise.then((data) => {
    console.log( 1, data );
}).catch((data) => {
    console.log( 2, data );
});

console.log('after');
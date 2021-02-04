function workP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

function justFunc() {
    return 'just Function';
}

async function asyncFunc() {
    return 'async Fucntion';
}

console.log(justFunc());
console.log(asyncFunc());
console.log(workP());
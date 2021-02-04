async function myAsyncFunc() {
    return 'done';
}

const result = myAsyncFunc();
console.log(result); // Promise { <resolved>: "done" }

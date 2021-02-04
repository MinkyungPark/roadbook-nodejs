function workP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('workP function');
        }, sec * 1000);
    });
}

async function asyncFunc() {
    const result_workP = await workP(3);
    console.log(result_workP);
    return 'async function';
}

asyncFunc().then((result) => {
    console.log(result)
});
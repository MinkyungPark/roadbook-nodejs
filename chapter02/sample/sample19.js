function fakeSetTimeout(callback) {
    callback();
}

console.log(0);

fakeSetTimeout(function () {
    console.log('Hello');
});

console.log(1);
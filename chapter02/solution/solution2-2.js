console.log('First Console');

function fakeSetTimeout(callback, delay) {
    callback();
}

console.log('Second Console');

fakeSetTimeout(function() {
    console.log('Third Console');
}, 0);

console.log('Fourth Console');


// 실행결과

// First Console
// Second Console
// Third Console
// Fourth Console
console.log('First Console');

setTimeout(function () {
    console.log('Second Console');
}, 0);

console.log('Third Console');


// 실행 결과

// First Console
// Third Console
// Second Console
// 비동기
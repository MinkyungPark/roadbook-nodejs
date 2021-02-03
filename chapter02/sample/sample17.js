setTimeout(() => { // 내장 함수 setTimeout(callback, delayTime) 
    console.log('todo: First work!');
}, 3000);

setTimeout(() => {
    console.log('todo: Second work!');
}, 2000);

// 결과 
// todo: Second work!
// todo: First work!
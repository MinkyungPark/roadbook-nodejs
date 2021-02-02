setTimeout(() => {
    setTimeout(() => {
        console.log('todo: Second work!');
    }, 2000);
    console.log('todo: First work!');
}, 3000);

// 결과 
// todo: First work! 
// todo: Second work!

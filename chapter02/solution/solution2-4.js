// 문제

// function work(sec, callback) {
//     setTimeout(() => {
//         callback(new Date().toISOString());
//     }, sec*1000);
// };

// work(1, (result) => {
//     console.log('첫번째 작업', result);
    
//     work(1, (result) => {
//         console.log('두번째 작업', result);
//     });

// });



// 정답
function work(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec*1000);
    });
};

work(1).then((result) => {
    console.log('첫번째 작업', result);
    return work(1);
}).then((result) => {
    console.log('두번째 작업', result);
});

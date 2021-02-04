function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error!');
        }, sec * 1000);
    });
}

wait(3).catch(e => {
    console.log('1st catch ', e);
});

/* chain은 같은 객체를 리턴할 때만 가능하다.*/
wait(3).catch(e => {
    console.log('1st catch ', e);
}) // wait함수의 에러를 받음
    .catch(e => {
        console.log('1st catch ', e);
    }); // 위 catch 구문의 상태를 받음. 에러를 잘 받았으므로 에러가 발생하지 X


/* chain 을 하고 싶을 땐. */
wait(3).catch(e => {
    console.log('1st catch ', e);
    throw e;
})
    .catch(e => {
        console.log('1st catch ', e);
    });

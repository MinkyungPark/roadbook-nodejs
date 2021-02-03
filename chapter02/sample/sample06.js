function outer() {
    var a = 'A';
    var b = 'B';

    function inner() {
        var a = 'AA';
        console.log(b);
    }
    return inner;
}

var outerFunc = outer();
outerFunc(); // B
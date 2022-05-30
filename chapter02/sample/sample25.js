function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw 'type of arguments must be number type';
    }
    console.log(a + b);
}

sum(1, '4');
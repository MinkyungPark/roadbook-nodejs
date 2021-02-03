const animal = {
    leg: 4,
    tail: 1,
    say() {
        console.log('I have 4 legs 1 tail');
    }
}

const dog = {
    sound: 'wang',
    happy: true
}

dog.__proto__ = animal;

const cat = {
    sound: 'yaong'
}

cat.__proto__ = dog;

console.log(cat.happy); // true
console.log(cat.leg); // 4
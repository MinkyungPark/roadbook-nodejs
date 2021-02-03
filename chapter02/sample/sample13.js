function func() { };
console.log(func.prototype); //func {}

func.prototype.name = 'gildong';
console.log(func.prototype); // func { name: 'gildong' }
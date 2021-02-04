const a = require('./a');
const b = require('./b');

a.call();
b.call();

/*
결과

a.js 진입..!
b.js 진입..!
a.js에서 b 호출 :  {call: ƒ}
b.js에서 a 호출 :  {}

*/
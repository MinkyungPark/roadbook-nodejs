const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');

/* redis version 3.1.2 */
/* npm install redis@^3.1.2 */
client.rpush('myKey', 0);
client.rpush('myKey', 1);
client.rpush('myKey', 2);  

/* if redis version over 4 */
// async function run() {
//     await client.connect();
// }
// run();

// client.rPush('myKey', '0');
// client.rPush('myKey', '1');
// client.rPush('myKey', '2');

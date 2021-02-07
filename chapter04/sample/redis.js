const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');

client.get('myKey', (err, value) => {
    console.log(value);
});



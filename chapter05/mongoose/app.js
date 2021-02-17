const mongoose = require("mongoose");

/* Connecting */
mongoose
    .connect("mongodb://127.0.0.1:27017/roadbook", {
        useNewUrlParser: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

/* Defining Schema */
const customerSchema = mongoose.Schema({
    name: 'string',
    age: 'number',
    sex: 'string'
},
    {
        collection: 'newCustomer'
    }
);

/* Schema -> Model */
const Customer = mongoose.model('Schema', customerSchema);

/* Generate Instance */
const customer1 = new Customer({ name: '홍길동', age: 30, sex: '남' });

/* Save Data into MongoDB */
customer1.save()
    .then(() => {
        console.log(customer1);
    })
    .catch((err) => {
        console.log('Error : ' + err);
    });
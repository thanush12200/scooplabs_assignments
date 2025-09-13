 const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerName: {
    type: String,
    },
    PhoneNumber: {
        type: Number,
    },
    Address: {
        type : String
    }
 
});

const Customer = mongoose.model('Student',customerSchema);
module.exports = Customer;
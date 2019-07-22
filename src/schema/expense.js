const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

let Expense = mongoose.Schema({
 name: String,
 description: String,
 amount: Number,

 accountId: ObjectId,
 
 createdAt: {
    type: Date,
    default: Date.now
 },
 updatedAt: Date,
 createdBy: ObjectId,
 updatedBy: ObjectId
});

module.exports = mongoose.model('expense', Expense);
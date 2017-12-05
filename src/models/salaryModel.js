var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var salarySchema = new Schema({
        '_id' : Schema.Types.ObjectId, 
        'State' : String, 
        'City' : String, 
        'Occupation Area' : String, 
        'Salary' : String
})

module.exports = mongoose.model('Salary', salarySchema, 'salary');
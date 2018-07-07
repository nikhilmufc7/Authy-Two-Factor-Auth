var mongoose   = require("mongoose");
      Schema   = mongoose.Schema;

var formSchema = new Schema ({
    name    :   { type: String, required: true },
    email   :   { type: String, required: true },
    address :   { type: String, required: true }
});

module.exports =  mongoose.model('Form', formSchema);
var mongoose   = require("mongoose");
      Schema   = mongoose.Schema;

var formSchema = new Schema ({
    name      :   { type: String, required: true },
    email     :   { type: String, required: true },
    address1  :   { type: String, required: true },
    address2  :   { type: String, required: false },
    city      :   { type: String, required: true },
    zip       :   { type: String, required: true },
    ip        :   { type: String, required: false },
    mobile    :   { type: String, required: false },
    browser   :   { type: String, required: false },
    os        :   { type: String, required: false },
    isABot    :   { type: String, required: false },
    mobileVersion : {type: String, required: false}
});

module.exports =  mongoose.model('Form', formSchema);
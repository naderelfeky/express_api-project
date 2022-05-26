const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// structure schema
const strleaner = new Schema({
    name: {
        type:String,
        require: true
       },
    username:{
        type:String,
        require: true
    },
    pass:{
        type:String,
        require: true
    }

}
             
);

//model base schema
// const Model_schema =mongoose.model('Model_schema',str)

// module.exports = Model_schema;

module.exports = mongoose.model('learnerSchema', strleaner )
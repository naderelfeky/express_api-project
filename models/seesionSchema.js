const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// structure schema
const strseesion = new Schema({
    name: {
        type:String,
        require: true
       },
    timesession:{
        type:String,
        require: true
    },
    couch:{
        type:String,
        require: true
    }

}
             
);

//model base schema
// const Model_schema =mongoose.model('Model_schema',str)

// module.exports = Model_schema;

module.exports = mongoose.model('seesionSchema', strseesion )
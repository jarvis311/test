const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    // modelOneId: {
    //     type: new mongoose.Types.ObjectId(),
    //     // ref:'modelOne',
    //     require: true
    // },
    modelTwoData:{
        type:String,
        required:true,
    }

});

//Export the model
module.exports = mongoose.model('ModelTwo', userSchema);
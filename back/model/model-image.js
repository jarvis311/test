const mongoose = require('mongoose'); 

var userSchema = new mongoose.Schema({
    // modeltwoId:{
    //     type: new mongoose.Types.ObjectId(),
    //     // ref:'ModelTwo',
    //     require: true
    // },
    image:{
        type:String,
        required:true,
    }

});

//Export the model
module.exports = mongoose.model('ModelImage', userSchema);
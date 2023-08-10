const CH = require("../model/checked.model");
const Model1 = require("../model/model-one");
const Model2 = require("../model/model-two");
const ModelImage = require("../model/model-image");


exports.createUser = async (req, res) => {
  try {
    await User.create(req.body);
  } catch (error) {
    res.json(error.message);
  }
};
exports.createHooby = async (req, res) => {
  const { hobby } = req.body;
  try {
    await CH.create({ hobby });
  } catch (error) {
    res.json(error.message);
  }
};
exports.getHobby = async (req, res) => {
  const { id } = req.params;
  try {
    const ressponse = await CH.findById(id);
    res.json(ressponse);
  } catch (error) {
    res.json(error.message);
  }
};
exports.postMultiData = async (req, res) => {
  const {data, data1} = req.body 
  try {
    console.log('>>>>>>>',req.body)
    console.log('fsfs>>>>>>>',req.files)
    // const modelRes1 = await Model1.create({ modelOneData: req.body.modelOneData })   
    //     const modele2payload = req.body.modelTwoData.map(item => {
    //         modelTwoData: item.fname , modelOneId: modelRes1._id,
    //     })
       
        
    //       Model3.create({sss
    //             modelOneId: res._id,
    //             modelTwoData: req.body.modelTwoData
            
   
    // });
    // res.json(ressponse);
  } catch (error) {
    res.json(error.message);
  }
};

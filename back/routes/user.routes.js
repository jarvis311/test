const router = require('express').Router()
const userControler = require("../controller/userContoller")
const userVAlidation = require('../validator/user.validator')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../uploads/');
    },
   
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
   
var upload = multer({ storage: storage })


router.post("/",userVAlidation, userControler.createUser)
router.post("/ch", userControler.createHooby)
router.get("/ch/:id", userControler.getHobby)
router.post("/postmulti", upload.array('lname'), userControler.postMultiData)

module.exports = router
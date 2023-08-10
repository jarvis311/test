const { body } = require('express-validator');
const { handleValidationErrors } = require('../middlewares/joiValidator');
const userVAlidation = [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Invalid email format').trim()  ,
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('age').isInt({ min: 18 }).withMessage('Age must be at least 18'),
    handleValidationErrors, 
  ]
  
  module.exports = userVAlidation


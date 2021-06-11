const express = require('express');
const app = express();
const User=require('../models/User')
const router=express.Router()
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
//require('dotenv').config()
require('dotenv').config()





app.use(express.json());// for parsing application/json

//REGISTER USER
router.post('/', [
  // username must be an email
  body('firstname',"Firstname must contain alphabetic letters ").isAlpha(),
  body('lastname', "Last name must contain alphabetic letters").isAlpha(),
  body('email',    "Email must contain a @ and (.) ").isEmail(),
  body('phone',    "Phone must contain a numeric value ").isNumeric(),
  body('password', "Password must contain at least 6 caracter ").isLength({ min: 5 }),
],
  (req, res) => {
/////////////////// Test de validation de champs :
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }
  ////////////////// test email && Creation de new user :

      User.find({email:req.body.email})
          .then(users=>
          {

              if (users.length>0){

                  return res.status(400).json({errors:[{msg:"This email address is already in use !"}]})
              }
              else{
                  let newUser=new User(req.body)
                  bcrypt.genSalt(10, function(err, salt) {
                      bcrypt.hash(req.body.password,salt,(err,hashedPwd)=> {
                          // Store hash in your password DB.
                          newUser.password=hashedPwd;
                          newUser.save();
                          let payload ={
                              userId:newUser._id
                          }
                          /* jwt.sign(payload, process.env.SECRET_KEY,(err,token))
                               .then(res.send({token}))
                               .catch(res.status(400).send({errors: [{msg: "Error !"}]}))
                         */
                          jwt.sign(payload,'baset',(err,token)=>{
                              if (err) throw  err
                              res.send({token})
                          });
                          //console.log(newUser)
                      });
                  });
              }
          })

  });

module.exports = router;

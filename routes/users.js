var express = require('express');
var router = express.Router();
var User     = require('./models/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    res.json({message:"User page",status:false});
});

router.post("/registerUser",function (req, res) {
    var response = {};
    var user = new User();
    console.log(req.body);
    user.userEmail = req.body.email;
    user.userPassword = req.body.password;
    User.findOne({userEmail:req.body.email},function(err,obj) {
        console.log(obj);
        if(obj === null){
            user.save(function (err, data) {
                if(err){
                    response = {message:"User not registered",status:false};
                }else{
                    response = {message:"User registered",status:true,data:data};
                }
                res.json(response);
            })
        }else {
            response = {message:"Email already registered.",status:false};
            res.json(response);
        }

    })

});

module.exports = router;

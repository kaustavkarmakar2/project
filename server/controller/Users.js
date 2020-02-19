const Users = require('../../models').users;
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
process.env.SECRET_KEY = 'secret';

module.exports={

    //signup module
    
    signup(req,res){
        
        return Users.findOne({ 
  
            where: {
                email_id: req.body.email_id
            }       
              
        })      
        .then(users => {
          if(!users){
            const hash = bcrypt.hashSync(req.body.password,10);
            req.body.password=hash;
            Users.create(req.body)
              .then(Users =>{
                
                  let token= jwt.sign(Users.dataValues, process.env.SECRET_KEY, {
                    expiresIn : 60*60*24
                  });
                  res.json({token:token,status:1})
              })
              .catch(err =>{
                res.send({error: err, status:2})
  
              })
          }else{
              res.json({error:'users already exists', status:2})
  
            }
        })
        .catch(err =>{
          res.send({error: err, status:2})
        })
        
    }
}
    

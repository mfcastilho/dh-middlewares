const db = require("../database/database.json");

const accessAuthAdmin =(req, res, next)=> {
  
  let user = req.query.user;
  if(user){
    db.admins.forEach((admin)=>{
      if(admin.name== user){
        next();
      }
    });
  }else{
    res.send("NÃO tem os privilégios para acessar!");
  }
}

module.exports = accessAuthAdmin;
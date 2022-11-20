const UserService= require('../services/userService');
const UserModels = require('../model/user.model');

var userController = {};

userController.createUser = function (req,res){
    let user = new UserModels({
        name:req.body.name,
        email:req.body.email,
        password: req.body.password
    })
    UserService.createUser(user,(error,success)=>{
        if(error){
            return res.status(500).json({isSuccess:false,error:error})
        }
        else{
            return res.status(200).json({isSuccess:true,data:{message:success}})
        }

    })
}
userController.login = function (req,res){
    const param = {
        email:req.body.email,
        password:req.body.password
    }
    UserService.login(param,(error,result)=>{
        if(error){
            res.status(500).json({isSuccess:false, error:error})
        }
        else{
            res.json({isSuccess:true, data:result});
        }
    });
}

userController.editUser = function (req,res){
    const param = {
        name:req.body.name,
        email:req.body.email,
        password: req.body.password
    }
    UserService.editUser(param,(error,result)=>{
        if(error){
            return res.status(500).json({isSuccess:false,error:error})
        }
        else{
            return res.status(200).json({isSuccess:true,data:{message:result}})

        }
    });
}

userController.deleteUser = (req,res)=>{
    const param = {
        email: req.body.email,
    }
    UserService.deleteDoc(param,(error,result)=>{
        if(error){
            res.status(500).json({isSuccess:false, error:error})
        }
        else{
            res.json({isSuccess:true, data:result});
        }
    });
}

userController.getAllDoc = (req,res)=>{
    UserService.getAllDoc((error,records)=>{
        if(error){
            res.status(500).json({isSuccess:false, message:"error"});
        }
        else{
            res.status(200).json({isSuccess:true, data:records})
        }
    })
}

module.exports = userController;
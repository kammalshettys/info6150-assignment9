const express = require('express');
const Users = require('../model/user.model');
const UserController = require('../controller/userController')
const route = express.Router();
const User = require('../model/user.model');


route.post('/create',[UserController.createUser]);
route.put('/edit',[UserController.editUser]);
route.post('/login',[UserController.login]);
route.delete('/delete',[UserController.deleteUser]);
route.get('/getAll',[UserController.getAllDoc]);

module.exports = route;
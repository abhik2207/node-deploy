const express = require('express');

// Importing User controllers from Controller folder
const userController = require('../controller/user');

// Creating a Express Router for Users
const router = express.Router();

router
    .post('/', userController.createUser)
    .get('/', userController.getAllUsers)
    .get('/:id', userController.getOneUser)
    .put('/:id', userController.replaceUser)
    .patch('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser);

exports.routes = router;
const express = require('express')
const userController = require('../controllers/userController')
const router = new express.Router()

router.post('/create', userController.addUser)

router.get('/get/allusers', userController.getallUsers)

router.delete('/delete/user/:id', userController.deleteUser)

router.put('/edit/user/:id', userController.editUser)

module.exports = router

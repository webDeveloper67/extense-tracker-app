import express from 'express'
import {registerUser, loginUser, listUsers} from './../controllers/userController.js'

const router = express.Router()

router.route('/').get(listUsers).post(registerUser)
router.route('/login').post(loginUser)






export default router
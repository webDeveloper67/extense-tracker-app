import User from './../models/UserModel.js'
import mongoose from 'mongoose'
import generateToken from './../utils/generateToken.js'

const registerUser = async (req, res, next) => {
  try {
    const {name, email, password} = req.body

    const createdUser = await User.create({name, email, password})

    return res.status(200).json({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      password: createdUser.password,
      token: generateToken(createdUser._id)
    })
  } catch (error) {
    next(error)
  }
}


export {registerUser}

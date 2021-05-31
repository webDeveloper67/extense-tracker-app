import User from './../models/UserModel.js'
import mongoose from 'mongoose'

const createUser = async (req, res, next) => {
  const user = new User(req.body)

  try {
    const createdUser = await user.save()

    return res.status(200).json({createdUser})
  } catch (error) {
    next(error)
  }
}


export {createUser}
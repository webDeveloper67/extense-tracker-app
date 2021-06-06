import User from './../models/UserModel.js'
import ErrorResponse from './../utils/ErrorResponse.js'
import generateToken from './../utils/generateToken.js'

// Register a new User
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

// Login user
const loginUser = async (req, res, next) => {
  try {
    const {email, password} = req.body

    if(!email || !password) {
      return next(new ErrorResponse('Please enter email and password', 400))
    }

    const user = await User.findOne({email}).select('+password')

    if(!user) {
      return next(new ErrorResponse('Invalid Credentials', 400))
    }

    if(user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      })
    }
  } catch (error) {
    next(error)
  }
}

// List users
const listUsers = async (req, res, next) => {
  try {
    let users = await User.find().select('name email updated created')

    res.json(users)
  } catch (error) {
    next(error)
  }
}


export {registerUser, loginUser, listUsers}

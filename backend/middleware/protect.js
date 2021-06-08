import jwt from 'jsonwebtoken'
import ErrorResponse from '../utils/ErrorResponse.js'
import User from './../models/UserModel.js'

const protect = async (req, res, next) => {
  let token

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  }

  if(!token) {
    return next(new ErrorResponse('Not Authorized to access this route', 401))
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decoded.id).select('-password')

    next()
  } catch (error) {
    return next(new ErrorResponse('Not Authorized, token failed'))
  }
}


export {protect}
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
})

// Hashing Password
UserSchema.pre('save', async function(next) {
  if(!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)

  this.password = await bcrypt.hash(this.password, salt)
})

// Generate Token
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  })
}

export default mongoose.model('User', UserSchema)
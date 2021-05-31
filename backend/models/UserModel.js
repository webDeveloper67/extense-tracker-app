import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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

export default mongoose.model('User', UserSchema)
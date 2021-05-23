import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express()

dotenv.config()

connectDB()

const PORT = process.env.NODE_ENV || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`);
})
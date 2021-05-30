import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import expenseRoutes from './routes/expenseRoutes.js'
import errorHandler from './controllers/errorController.js'
import ErrorResponse from './utils/ErrorResponse.js'

const app = express()

dotenv.config()

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Mounting Routes
app.use('/api/expenses', expenseRoutes)

app.all('*', async (req, res, next) => {
  next(new ErrorResponse(`Can not find ${req.originalUrl} on the server!`, 404));
});

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`);
})
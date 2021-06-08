import Expense from './../models/ExpenseModel.js'
import ErrorResponse from '../utils/ErrorResponse.js'
import mongoose from 'mongoose'


const createExpense = async (req, res, next) => {
  
  try {
    req.body.recorded_by = req.user._id
    const expense = new Expense(req.body)

    const createdExpense = await expense.save()
    return res.status(200).json(createdExpense)
  } catch (error) {
    next(error)
  }
}

// List user's expenses according to sprcified dates in query
const expenseByUser = async (req, res, next) => {
  let firstDay = req.query.firstDay

  let lastDay = req.query.lastDay

  try {
    let expenses = await Expense.find({'$and': [{'incurred_on': {'$gte': firstDay, '$lte': lastDay}}, {'recorded_by': req.user._id}]}).sort('incurred_on').populate('recorded_by', '_id name')

    res.json(expenses)
  } catch (error) {
    next(error)
  }
}

// Average Categories
const averageCategories = async (req, res, next) => {
  const firstDay = new Date(req.query.firstDay)
  const lastDay = new Date(req.query.lastDay)

  try {
    let categoryMonthAvg = await Expense.aggregate([

      {$match: {incurred_on: {$gte: firstDay, $lte: lastDay}, recorded_by: mongoose.Types.ObjectId(req.user._id)}},

      {$group: {_id: {category: '$category'}, totalSpent: {$sum: '$amount'}}},

      {$group: {_id: '$_id.category', avgSpent: {$avg: '$totalSpent'}}},

      {$project: {x: '$_id', y: '$avgspent'}}
    ]).exec()

    res.json({monthAVG: categoryMonthAvg})
  } catch (error) {
    next(error)
  }
}

// Remove an expense
const removeExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findByIdAndRemove(req.params.expenseId)

    if(!expense) {
      return next(new ErrorResponse('No expense found with this specific ID', 404))
    }

    res.status(204).json({status: 'success'})
  } catch (error) {
    next(error)
  }
}

// Middleware to check if req.user._id is equal to whom creates an expense
const hasAuth = async (req, res, next) => {
  try {
    let expense = await Expense.findById(req.params.expenseId)
    console.log(expense);
  
    if(!expense) {
      return next(new ErrorResponse('Expense not found', 400))
    }
  
    let isAuthed = expense.recorded_by.equals(req.user._id)
    
    if(!isAuthed) {
      return next(new ErrorResponse('You are not authorized', 403))
    }
    next()
  } catch (error) {
    next(error)
  }
}







export {createExpense, expenseByUser,averageCategories, removeExpense, hasAuth}
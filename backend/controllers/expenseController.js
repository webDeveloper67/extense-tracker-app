import Expense from './../models/ExpenseModel.js'
import mongoose from 'mongoose'


const createExpense = async (req, res, next) => {
  try {
    const expense = new Expense({
      title: req.body.title,
      category: req.body.category,
      amount: req.body.amount
    })
    
    const createdExpense = await expense.save()
    return res.status(200).json({createdExpense})
  } catch (error) {
    next(error)
  }
}






export {createExpense}
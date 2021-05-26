import Expense from './../models/ExpenseModel.js'
import mongoose from 'mongoose'


const createExpense = async (req, res, next) => {
  try {
    const expense = new Expense(req.body)
    await expense.save()
  } catch (error) {
    next(error)
  }
}






export {createExpense}
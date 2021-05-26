import Expense from './../models/ExpenseModel.js'
import mongoose from 'mongoose'


const createExpense = async (req, res, next) => {
  console.log(req.body, '🟠');
  try {
    const expense = new Expense({
      title: req.body.title,
      category: req.body.category,
      amount: req.body.amount
    })
    await expense.save()
    return res.status(200).json({
      message: "Expense recorded!"
    })
  } catch (error) {
    next(error)
  }
}






export {createExpense}
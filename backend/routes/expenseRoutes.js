import express from 'express'
import {createExpense, expenseByUser, averageCategories, updateExpense, removeExpense, hasAuth} from './../controllers/expenseController.js'


const router = express.Router()
import {protect} from './../middleware/protect.js'



router.route('/').post(protect, createExpense).get(protect, expenseByUser)

router.route('/category/averages').get(protect, averageCategories)

router.route('/:expenseId').put(protect, hasAuth, updateExpense).delete(protect, hasAuth, removeExpense)




export default router
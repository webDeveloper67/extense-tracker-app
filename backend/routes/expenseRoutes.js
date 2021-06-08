import express from 'express'
import {createExpense, expenseByUser, averageCategories, removeExpense, hasAuth} from './../controllers/expenseController.js'


const router = express.Router()
import {protect} from './../middleware/protect.js'



router.route('/').post(protect, createExpense).get(protect, expenseByUser)

router.route('/category/averages').get(protect, averageCategories)

router.route('/:expenseId').delete(protect, hasAuth, removeExpense)




export default router
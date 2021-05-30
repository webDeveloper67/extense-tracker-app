import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {expenseReducer} from './reducers/expenseReducer'
import {alertReducer} from './reducers/alertReducer'


const reducer = combineReducers({
  expenses: expenseReducer,
  alerts: alertReducer
})

const initialState = {}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(
  reducer,
  initialState,
  composedEnhancer
)

export default store
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {expenseReducer} from './reducers/expenseReducer'
import {alertReducer} from './reducers/alertReducer'
import {userRegisterReducer, userLoginReducer} from './reducers/userReducer'


const reducer = combineReducers({
  expenses: expenseReducer,
  alerts: alertReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(
  reducer,
  initialState,
  composedEnhancer
)

export default store
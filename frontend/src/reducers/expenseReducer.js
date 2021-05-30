import {CREATE_EXPENSE_REQUEST, CREATE_EXPENSE_FAIL, CREATE_EXPENSE_SUCCESS} from './../constants';

export const expenseReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_EXPENSE_REQUEST:
      return {...state, loading: true}
    case CREATE_EXPENSE_SUCCESS:
      return {...state, loading: false, expense: action.payload}
    case CREATE_EXPENSE_FAIL:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
};

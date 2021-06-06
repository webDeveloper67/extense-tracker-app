import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL} from './../constants'

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {...state, loading: true};
    case REGISTER_USER_SUCCESS:
      return {...state, loading: false, userInfo: action.payload, error: null};
    case REGISTER_USER_FAIL:
      
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};
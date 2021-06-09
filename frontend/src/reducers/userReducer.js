import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_REQUEST, LOGOUT_USER} from './../constants'

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {loading: true};
    case REGISTER_USER_SUCCESS:
      return {loading: false, userInfo: action.payload, error: null};
    case REGISTER_USER_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {loading: true};
    case LOGIN_USER_SUCCESS:
      return {loading: false, userInfo: action.payload, error: null};
    case LOGIN_USER_FAIL:
      return {loading: false, error: action.payload};
    case LOGOUT_USER:
      return {}
    default:
      return state;
  }
};
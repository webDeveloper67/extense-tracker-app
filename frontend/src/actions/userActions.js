import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_REQUEST} from './../constants'
import axios from 'axios'
import {setAlert} from './alertActions'

// Register a user
export const registerUser = user => async dispatch => {
  try {
    dispatch({type: REGISTER_USER_REQUEST})

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const {data} = await axios.post('/api/users', user, config)

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data
    })

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    const message = error.response.data.message
    
    if(error.response) {
      dispatch(setAlert(message, 'danger'))
    }

    dispatch({
      type: REGISTER_USER_FAIL,
      payload: message
    })
  }
}

// Login a user
export const loginUser = user => async dispatch => {
  try {
    dispatch({type: LOGIN_USER_REQUEST})

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const {data} = await axios.post('/api/users/login', user, config)

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    const message = error.response.data.message
    
    if(error.response) {
      dispatch(setAlert(message, 'danger'))
    }

    dispatch({
      type: LOGIN_USER_FAIL,
      payload: message
    })
  }
}


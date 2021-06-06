import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL} from './../constants'
import axios from 'axios'
import {setAlert} from './alertActions'

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
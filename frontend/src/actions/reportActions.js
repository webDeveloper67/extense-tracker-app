import {AVERAGE_CATEGORY_REQUEST, AVERAGE_CATEGORY_SUCCESS, AVERAGE_CATEGORY_FAIL} from './../constants'
import queryString from 'query-string'
import axios from 'axios'
import {setAlert} from './alertActions'


export const averageCategories = params => async (dispatch, getState) => {
  const query = queryString.stringify(params)

  try {
    dispatch({type: AVERAGE_CATEGORY_REQUEST})

    const {userLogin: {userInfo}} = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const {data} = await axios.get('/api/expenses/category/averages?'+query, config)

    dispatch({
      type: AVERAGE_CATEGORY_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.log(error.response)
    dispatch({
      type: AVERAGE_CATEGORY_FAIL
    })
    if(error.response) {
      const message = error.response.data.message
      dispatch(setAlert(message, 'danger'))
    }
  }
}

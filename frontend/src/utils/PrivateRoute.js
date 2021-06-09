import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoute = ({component: Component, ...rest}) => {
  const userInfo = useSelector(state => state.userLogin.userInfo)
  const {token} = userInfo
  
  return <Route 
    {...rest}
    render={props => (
      token ? (<Component {...props} />) : (<Redirect to={{pathname: '/signin', state: {from: props.location}}} />)
    )}
  />
}

export default PrivateRoute
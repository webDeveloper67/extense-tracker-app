import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoute = ({component= Component, ...rest}) => {
  const userLogin = useSelector(state => state.userLogin)
  const {isAuthed} = userLogin
  return <Route 
    {...rest}
    render={props => (
      isAuthed ? (<Component {...props} />) : (<Redirect to={{pathname: '/signin', state: {from: props.location}}} />)
    )}
  />
}

export default PrivateRoute
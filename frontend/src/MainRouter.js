import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Menu from './Screens/Menu'
import Home from './Screens/Home'
import AlertComp from './Screens/AlertComp'
import NewExpense from './Expenses/NewExpense'

const MainRouter = () => {
  return (
    <div>
      <Menu />
      <AlertComp />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/expenses/new' component={NewExpense} />
      </Switch>
    </div>
  )
}

export default MainRouter
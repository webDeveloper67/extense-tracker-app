import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

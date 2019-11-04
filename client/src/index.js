import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import Home from './pages/Home'
import Router from './router'
import './style/global.less'
renderWithHotReload(Router)

if(module.hot){
  module.hot.accept('./router/index.js', () => {
    const Router = require('./router/index.js').default
    renderWithHotReload(Router)
  })
}

function renderWithHotReload(Router) {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AppContainer>
    ,
    document.getElementById('app')
  )
}
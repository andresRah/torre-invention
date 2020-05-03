import 'babel-polyfill'
import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Router } from '@reach/router'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Home path='/' />
      </Router>
    </div>
  )
}

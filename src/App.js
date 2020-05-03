import 'babel-polyfill'
import React, { Suspense } from 'react'
import { NavBar } from './components/NavBar'
import { GlobalStyle } from './styles/GlobalStyles'
import { CustomHeader } from './components/CustomHeader'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { Profile } from './pages/Profile'
import { NotFound } from './pages/NotFound'
import { Router } from '@reach/router'

export const App = () => {
  return (
    <Suspense fallback={<div />}>
      <div>
        <GlobalStyle />
        <CustomHeader />
        <Router>
          <NotFound default />
          <Home path='/' />
          <Favorites path='/favorites' />
          <Profile path='/profile' />
        </Router>
        <NavBar />
      </div>
    </Suspense>
  )
}

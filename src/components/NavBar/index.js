import React from 'react'
import { Link, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Link to='/favorites'><MdFavoriteBorder size={SIZE} /></Link>
      <Link to='/profile'><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}

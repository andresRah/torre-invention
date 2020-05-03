import React, { useState } from 'react'
import { Div, Title, Subtitle } from './styles'
import { initialFavoritesValues } from '../../utils/Constants'
import { PositionCard } from '../PositionCard'

export const FavoritesBody = ({ children, title, subtitle }) => {

  const [storedFavorites, setFavorites] = useState(() => {
    try {
      const values = []
      const keys = Object.keys(window.localStorage)
      let i = keys.length
      while (i--) {
        values.push(window.localStorage.getItem(keys[i]))
      }
      return values
    } catch (e) {
      return initialFavoritesValues
    }
  })

  return (
    <>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
        {storedFavorites.map((favorite, index) => {
          try {
            const favoriteJSON = JSON.parse(favorite)
            const organizations = []
            if (favoriteJSON !== undefined && favoriteJSON?.name !== null && favoriteJSON?.liked) {
              organizations.push(favoriteJSON)
              console.log(organizations)
              return (
                <PositionCard key={index} organizations={organizations} />
              )
            }
          } catch (e) { }
        })}
      </Div>
    </>
  )
}

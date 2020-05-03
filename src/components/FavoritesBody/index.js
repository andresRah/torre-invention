import React from 'react'
import { Div, Title, Subtitle } from './styles'

export const FavoritesBody = ({ children, title, subtitle }) => {
  return (
    <>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}

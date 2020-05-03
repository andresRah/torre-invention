
import React from 'react'
import { usePositionsListData } from '../../hooks/usePositionsListData'
import { Ul } from './styles'
import { PositionCard } from '../PositionCard'

export const PositionList = () => {
  const { postitionsData, loading, onReload } = usePositionsListData()

  return (
    <Ul>
      {
        !loading &&
        postitionsData.length > 0 ?
          postitionsData.map(position => <PositionCard key={position.id} organizations={position.organizations} />)
          : <h2>NOT FOUND</h2>
      }
    </Ul>
  )
}

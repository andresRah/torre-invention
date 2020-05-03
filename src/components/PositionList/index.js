
import React from 'react'
import { usePositionsListData } from '../../hooks/usePositionsListData'
import { PositionCard } from '../PositionCard'
import GridLoader from 'react-spinners/GridLoader'
import { override } from './styles'

export const PositionList = () => {
  const { postitionsData, loading, onReload } = usePositionsListData()

  return (
    <ul>
      {
        loading ? (
          <div className='sweet-loading'>
            <GridLoader
              css={override}
              size={30}
              color='#CDDD39'
              loading={loading}
            />
          </div>)
          : postitionsData.length > 0 ?
            postitionsData.map(position => <PositionCard key={position.id} organizations={position.organizations} />)
            : <h2>NOT FOUND</h2>
      }
    </ul>
  )
}

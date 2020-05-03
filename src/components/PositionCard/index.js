import React, { useState } from 'react'
import {
  Article, Img, Card, Div1, Div2, Div3, H5, Span1, Span2, SpanCountLike,
  Span3, Span4, Span5, Span6, Span7, IElement2, Div4, DivFavSection, SpanLike
} from './styles'
import { useNearScreen } from '../../hooks/useNearScreen.js'
import { MdFavoriteBorder, MdFavorite, MdLightbulbOutline, MdHighlightOff } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { DEFAULT_IMAGE } from '../../utils/Constants'

export const PositionCard = ({ id, organizations }) => {
  const [show, element] = useNearScreen()
  const [storedValue, setLocalStorage] = useLocalStorage(`like-${organizations[0].id}`, false)

  const Icon = storedValue ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {show && (
        <>
          <Card>
            <Div1>
              <Div2>
                <Div3 />
                <Img src={organizations[0]?.picture || DEFAULT_IMAGE} />
              </Div2>
              <Div4>
                <H5>
                  <Span3>{organizations[0]?.name}</Span3>
                  <Span4>
                    <Span5>{(Math.random() * (4.5 - 1.1) + 1.1).toFixed(1)}k</Span5>
                    <Span6>
                      <Span7>
                        <IElement2> </IElement2>
                      </Span7>
                    </Span6>
                  </Span4>
                </H5>
                <Span1>Digital Marketing Strategist</Span1>
                <Span2>
                  Remoto (actualmente en Liverpool, United Kingdom)
                </Span2>

                <DivFavSection>
                  <SpanLike onClick={() => setLocalStorage(!storedValue)}>Likes <SpanCountLike><Icon size='14px' /> 640</SpanCountLike></SpanLike>
                  <SpanLike>Content <SpanCountLike><MdLightbulbOutline size='14px' /> {Math.floor(Math.random() * (52 - 4) + 4)}</SpanCountLike></SpanLike>
                  <SpanLike>Marketing <SpanCountLike><MdHighlightOff size='14px' /> {Math.floor(Math.random() * (29 - 4) + 4)}</SpanCountLike></SpanLike>
                </DivFavSection>
              </Div4>
            </Div1>
          </Card>
        </>
      )}
    </Article>
  )
}

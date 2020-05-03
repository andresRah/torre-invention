import React from 'react'
import {
  Article, Img, Card, Div1, Div2, Div3, H5, Span1, Span2,
  Span3, Span4, Span5, Span6, Span7, IElement2, Div4
} from './styles'
import { useNearScreen } from '../../hooks/useNearScreen.js'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PositionCard = ({ id, organizations }) => {
  const [show, element] = useNearScreen()

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
              </Div4>
            </Div1>
          </Card>
        </>
      )}
    </Article>
  );
}

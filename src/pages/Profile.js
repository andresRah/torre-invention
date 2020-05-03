import React from 'react'
import { Div1, Div2, Div3, Div4, Div5, Img, Ul, Li, Span, Span2, Span3 } from './styles'

const URL_PROFILE = 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/dca005ab4374dcd8b9bf70e971dfa07614de9285/profile_abrpcgy/8aedd568257e3e4905340983cde23b5c.jpg'

export const Profile = () => {
  return (
    <>
      <Div1>
        <Div2>Tu imagen</Div2>
        <Div3>
          <Div4>
            <Div5>
              <Img src={URL_PROFILE} alt='Andres Arevalo' />
            </Div5>
          </Div4>
        </Div3>
        <Ul>
          <Li>
            <Span>
              <Span2>Tu nombre completo*</Span2>
              <Span3>Andres Arevalo</Span3>
            </Span>
          </Li>
          <Li>
            <Span>
              <Span2>Tu nombre de usuario*</Span2>
              <Span3>andresleonardo</Span3>
            </Span>
          </Li>
          <Li>
            <Span>
              <Span2>Tu título profesional*</Span2>
              <Span3>Developer Engineer</Span3>
            </Span>
          </Li>
          <Li>
            <Span>
              <Span2>Número de teléfono</Span2>
              <Span3>+573013981247</Span3>
            </Span>
          </Li>
          <Li>
            <Span>
              <Span2>Tu correo electrónico*</Span2>
              <Span3>andres.arevalopar@gmail.com</Span3>
            </Span>
          </Li>
        </Ul>
      </Div1>
    </>
  )
}

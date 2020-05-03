import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  min-height: 170px;
  transition: 0.3s;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  border-radius: 2px;
  display: -webkit-box;
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: column;
  overflow: auto;
  position: relative;
  z-index: 1;
  background-color: #27292D;
  color: rgba(255, 255, 255, 0.90);
`

export const Div1 = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  font-family: Muli,Helvetica,Arial,sans-serif;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 22px;
  -webkit-box-direction: normal;
  color: hsla(0,0%,100%,.65);
  white-space: nowrap;
  cursor: default !important;
  box-sizing: inherit;
  -webkit-box-flex: 1;
  display: inline-flex;
  flex-grow: 1;
  width: 0;
  margin-top: 21px;
`

export const Div2 = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  font-family: Muli,Helvetica,Arial,sans-serif;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 22px;
  -webkit-box-direction: normal;
  color: hsla(0,0%,100%,.65);
  white-space: nowrap;
  cursor: default !important;
  box-sizing: inherit;
  min-width: var(--size);
  position: relative;
  filter: drop-shadow(var(--box-shadow));
  margin-right: 12px;
  width: 64px;
  --size: 64px;
  --font-size: 28px;
  --border-width: 5px;
  --box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
`

export const Div3 = styled.div`
-webkit-font-smoothing: antialiased;
-webkit-tap-highlight-color: transparent;
font-weight: 400;
font-family: Muli,Helvetica,Arial,sans-serif;
letter-spacing: normal;
font-size: 14px;
line-height: 22px;
-webkit-box-direction: normal;
color: hsla(0,0%,100%,.65);
white-space: nowrap;
--size: 64px;
--font-size: 28px;
--border-width: 5px;
--box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
cursor: default !important;
box-sizing: inherit;
clip-path: polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);
height: var(--size);
left: calc(50% - var(--size) / 2);
position: absolute;
top: 0;
width: var(--size);
margin: auto;
background-color: #5E626B;
`

export const Container = styled.div`
  padding: 2px 16px;
`

export const Article = styled.article`
  
`

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  border-radius: 50%;
`

export const Img = styled.img`
  ${fadeIn()}
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  font-family: Muli,Helvetica,Arial,sans-serif;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 22px;
  -webkit-box-direction: normal;
  color: hsla(0,0%,100%,.65);
  white-space: nowrap;
  --size: 64px;
  --font-size: 28px;
  --border-width: 5px;
  --box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
  cursor: default !important;
  box-sizing: inherit;
  font-style: italic;
  max-width: 100%;
  vertical-align: middle;
  clear: both;
  display: flex;
  position: relative;
  margin: auto;
  border: unset;
  border-radius: 0;
  clip-path: polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);
  height: calc(var(--size) - var(--border-width) * 2)!important;
  transform: translateY(var(--border-width));
  width: calc(var(--size) - var(--border-width) * 2);
  background: none!important;
  object-fit: cover;
  border-color: #5E626B;
  box-shadow: var(--box-shadow);
`

export const H5 = styled.h5`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-family: Muli,Helvetica,Arial,sans-serif;
  -webkit-box-direction: normal;
  white-space: nowrap;
  cursor: default !important;
  box-sizing: inherit;
  letter-spacing: .01em;
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #cddc39;
`

export const Span1 = styled.span`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-family: Muli,Helvetica,Arial,sans-serif;
  -webkit-box-direction: normal;
  white-space: nowrap;
  cursor: default !important;
  box-sizing: inherit;
  letter-spacing: .02em;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.65);
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 3px 0;
`

export const Span2 = styled.span`
-webkit-font-smoothing: antialiased;
-webkit-tap-highlight-color: transparent;
font-weight: 400;
font-family: Muli,Helvetica,Arial,sans-serif;
letter-spacing: normal;
line-height: 22px;
-webkit-box-direction: normal;
color: hsla(0,0%,100%,.65);
white-space: nowrap;
cursor: default !important;
box-sizing: inherit;
display: block;
max-width: 100%;
overflow: hidden;
text-overflow: ellipsis;
font-size: 12px;
`

export const IElement = styled.i`
  -webkit-tap-highlight-color: transparent;
  -webkit-box-direction: normal;
  color: hsla(0,0%,100%,.65);
  cursor: default !important;
  box-sizing: inherit;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -webkit-box-align: center;
  align-items: center;
  display: inline-flex;
  fill: currentColor;
  margin: auto;
  position: relative;
  text-rendering: optimizeLegibility;
  vertical-align: middle;
  font-size: 16px;
  height: 16px;
  margin-right: 3px;
  margin-top: -3px;
  min-height: 16px;
  min-width: 16px;
  width: 16px;
`

export const Span3 = styled.span`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-family: Muli,Helvetica,Arial,sans-serif;
  -webkit-box-direction: normal;
  white-space: nowrap;
  letter-spacing: .01em;
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  cursor: default !important;
  box-sizing: inherit;
  -webkit-box-flex: 1;
  color: #cddc39!important;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Span4 = styled.span`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-family: Muli,Helvetica,Arial,sans-serif;
  white-space: nowrap;
  letter-spacing: .01em;
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  cursor: default !important;
  box-sizing: inherit;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-direction: reverse;
  -webkit-box-orient: horizontal;
  color: #cddc39;
  display: inline-flex;
  flex-direction: row-reverse;
  --size: undefinedpx;
  --dot-divider-size: 8px;
`

export const Span5 = styled.span`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-family: Muli,Helvetica,Arial,sans-serif;
  white-space: nowrap;
  letter-spacing: .01em;
  line-height: 20px;
  font-size: 16px;
  -webkit-box-direction: reverse;
  color: #cddc39;
  --size: undefinedpx;
  --dot-divider-size: 8px;
  cursor: default !important;
  box-sizing: inherit;
  display: flex;
  font-weight: 600;
  margin-left: 3px;
`

export const Span6 = styled.span`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-family: Muli,Helvetica,Arial,sans-serif;
  white-space: nowrap;
  letter-spacing: .01em;
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  -webkit-box-direction: reverse;
  color: #cddc39;
  --size: undefinedpx;
  --dot-divider-size: 8px;
  cursor: default !important;
  box-sizing: inherit;
  display: flex;
`

export const Span7 = styled.span`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-family: Muli,Helvetica,Arial,sans-serif;
  white-space: nowrap;
  letter-spacing: .01em;
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  -webkit-box-direction: reverse;
  color: #cddc39;
  --size: undefinedpx;
  --dot-divider-size: 8px;
  cursor: default !important;
  box-sizing: inherit;
`

export const IElement2 = styled.i`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-family: Muli,Helvetica,Arial,sans-serif;
  white-space: nowrap;
  letter-spacing: .01em;
  line-height: 20px;
  font-weight: 400;
  -webkit-box-direction: reverse;
  --size: undefinedpx;
  --dot-divider-size: 8px;
  cursor: default !important;
  box-sizing: inherit;
  -webkit-box-align: center;
  align-items: center;
  display: inline-flex;
  fill: currentColor;
  margin: auto;
  position: relative;
  text-rendering: optimizeLegibility;
  font-size: var(--size);
  height: var(--size);
  margin-left: 0;
  margin-right: 0;
  min-height: var(--size);
  min-width: var(--size);
  vertical-align: baseline;
  width: var(--size);
  color: #cddc39;
`

export const Div4 = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  font-family: Muli,Helvetica,Arial,sans-serif;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 22px;
  -webkit-box-direction: normal;
  color: hsla(0,0%,100%,.65);
  white-space: nowrap;
  cursor: default !important;
  box-sizing: inherit;
  margin-right: 12px;
`

export const DivFavSection = styled.div`
-webkit-font-smoothing: antialiased;
-webkit-tap-highlight-color: transparent;
font-weight: 400;
font-family: Muli,Helvetica,Arial,sans-serif;
letter-spacing: normal;
font-size: 14px;
line-height: 22px;
-webkit-box-direction: normal;
color: hsla(0,0%,100%,.65);
cursor: default !important;
box-sizing: inherit;
margin: 16px;
overflow: hidden;
position: relative;
white-space: nowrap;
margin-left: 15px;
`

export const SpanLike = styled.span`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  font-family: Muli,Helvetica,Arial,sans-serif;
  letter-spacing: normal;
  font-size: 14px;
  -webkit-box-direction: normal;
  white-space: nowrap;
  box-sizing: inherit;
  background: none;
  border: 1px solid #c2c2c2;
  border-radius: 2px;
  color: hsla(0,0%,100%,.9);
  display: inline-block;
  height: 32px;
  line-height: 100%;
  margin-right: 6px;
  padding: 8px 16px;
  cursor: pointer;
`

export const SpanCountLike = styled.span`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  font-family: Muli,Helvetica,Arial,sans-serif;
  letter-spacing: normal;
  font-size: 14px;
  -webkit-box-direction: normal;
  white-space: nowrap;
  color: hsla(0,0%,100%,.9);
  line-height: 100%;
  box-sizing: inherit;
`

import styled, { createGlobalStyle, css } from 'styled-components';
import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image'
import image from '../public/article3.jpeg'
import Link from 'next/link'
import { IH1 } from '../components/interfaces'

export const CompoH1 = styled.h1<IH1>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`

interface ICardProps {
  id: number;
  title: string;
  body: string;
  src?: string;
  landing?: boolean;
}

interface ICardLanding {
  landing?: boolean;
  hover?: boolean;
}

const CardContainer = styled.div<ICardLanding>`
  margin: 10px 20px;
  display: grid;
  width: ${props => props.landing ? 'auto' : '320px'};
  height: ${props => props.landing ? '380px' : '400px'};
  grid-template-rows: ${props => props.landing ? '1fr' : '220px auto'};
  grid-template-columns: ${props => props.landing ? '680px auto' : '1fr'};
  // background: ${props => props.hover ? 'aquamarine' : null};
  cursor: pointer;
  float: left;
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: ${props => props.landing ? '380px' : '220px'};
    left: 0;
    top: 0;
    border: ${props => props.landing ? 'none' : props.hover ? '10px solid white' : 'none'};
    transition: all 0.2s ease-in-out;
    z-index: 1;
    box-sizing: border-box;
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`
const CardContent = styled.div`
  widht: 100%;
  height: 100%;
`
const CardH3 = styled.h3<ICardLanding>`
  margin: 0;
  padding: 10px;
  font-weight: bold;
  font-size: ${props => props.landing ? '30px' : '18px'}
`
const CardP = styled.p`
  margin: 0;
  padding: 10px;
  color: #738A94;
`




export const Card = ({ id, title, body, src, landing }: ICardProps): JSX.Element => {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <Link href="/posts/id" as={`/posts/${id}`}>
      <CardContainer landing={landing} hover={hover} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <CardImage src={src ? src : image.src} />
        <CardContent>
          <CardH3 landing={landing}>{title}</CardH3>
          <CardP>{body.length > 180 && landing == false ? body.slice(0, 180) + "..." : body}</CardP>
        </CardContent>
      </CardContainer>
    </Link>
  )
}






// theme is now fully typed
export const MyComponent = styled.div`
  color: ${props => props.theme.colors.main};
`;

// theme is also fully typed
export const MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

// and this theme is fully typed as well
export const cssHelper = css`
  border: 1px solid ${props => props.theme.borderRadius};
`;
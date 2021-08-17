import styled, { createGlobalStyle, css } from 'styled-components';
import React, { FunctionComponent, useState, useReducer, useEffect, useMemo, useLayoutEffect, useContext, useRef, useCallback } from 'react';
import Image from 'next/image'
import image from '../public/article3.jpeg'
import Link from 'next/link'
import { IH1 } from '../components/interfaces'
import { MouseEvent } from 'react';
import { userContext } from '../pages/index'

interface IPProps {
  // test: string
  test: () => void
}

function useMouse() {
  const [mouse, setMouse] = useState<number>(0)
  useEffect(() => {
    console.log('mousemove')
    setMouse(100)
  })
  return mouse
}

function useTitle(title: string) {
  // const [title, setTitle] = useState<string>("")
  useEffect(() => {
    document.title = title
  })
}

// const P = React.memo(({ test }: IPProps) => {
const P = ({ test }: IPProps) => {
  console.log("p tag")
  // const mouse = useMouse()
  const [title, setTitle] = useState<string>("salam")
  useTitle(title)
  // all of 3 run when componentDidMount, in addition below
  // just didMount
  useEffect(() => {
    console.log("useEffect []", "p")
  }, [])
  // componentDidUpdate or parentDidUpdate
  useEffect(() => {
    console.log("useEffect null", "p")
  })
  // this [value] didUpdate
  useEffect(() => {
    console.log("useEffect [value]", "p")
  }, [test])
  // componentWillUnmount
  useEffect(() => {
    return () => console.log("useEffect willUnmount this component", "p")
  }, [])
  // useLayoutEffect(() => {
  //   return () => console.log("useLayout willUnmount this component", "p")
  // }, [])

  return (
    <p onClick={() => test()}>p tag</p>
    // <p>p tag: {test}</p>
  )
}
// )

export const Card = ({ id, title, body, src, landing, value, setValue, setRemoved, test, setTest }: ICardProps): JSX.Element => {
  console.log("Card component", id)
  const stateUser = useContext(userContext)
  const [hover, setHover] = useState<boolean>(false)
  const [local, setLocal] = useState<boolean>(true)
  const [y, setY] = useState<boolean>(true)
  const [w, setW] = useState<boolean>(true)
  // const [test2, setTest2] = useState<string>("test2")

  const myAl2 = () => alert('myAl')
  // const pTag = useMemo(
  //   () => {
  //     return <P test={myAl} />
  //   }, [y]
  // )
  // const myAl = () => alert("myAl")
  const myAl = useCallback(() => {
    alert("myAl useCallback")
  }, [y])

  // all of 3 run when componentDidMount, in addition below
  // just didMount
  useEffect(() => {
    console.log("useEffect []", id)
  }, [])
  // componentDidUpdate or parentDidUpdate
  useEffect(() => {
    console.log("useEffect null", id)
  })
  // this [value] didUpdate
  useEffect(() => {
    console.log("useEffect [value]", id)
  }, [w])
  // componentWillUnmount
  useEffect(() => {
    return () => console.log("useEffect willUnmount this component", id)
  }, [])


  return (
    // <Link href="/posts/id" as={`/posts/${id}`}>
    <CardContainer landing={landing} hover={hover}>
      <CardImage src={src ? src : image.src} />
      <CardContent>
        <CardH3 landing={landing}>{id} - val: {value ? "salam" : "sagol"}
          <button onClick={(e) => { setValue(e); setRemoved(id) }}>click</button>
              , {title}
        </CardH3>
        <button onClick={() => setTest(!test)}>test: {test ? "true" : "false"}</button>
        {/* {y ? <P test={test} /> : null}
        {y ? <P test={test} /> : null} */}
        <P test={myAl} />
        <P test={myAl} />
        {/* {pTag}
        {pTag} */}
        <button onClick={() => setLocal(!local)}>local: {local ? "true" : "false"}</button>
        <button onClick={() => setY(!y)}>y: {y ? "true" : "false"}</button>
        <button onClick={() => setW(!w)}>setW</button>
        <CardP>{body?.length > 180 && landing == false ? body.slice(0, 180) + "..." : body}</CardP>
      </CardContent>
    </CardContainer>
    // </Link>
  )
}


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
  value: boolean;
  setValue: (e: MouseEvent<HTMLButtonElement>) => void;
  setRemoved: (id: number) => void;
  test: boolean;
  setTest: (test: boolean) => void;
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

/*
useCallback =>
  parentde yazilir. parent update olanda child aldigi propdan dolayi componentDidUpdate etmesin (render edir ama).
  bu [value] deyisende child update ola biler. will remember your actual function
React.memo =>
  childda yazilir. child bundan extend edir. child parent update olanda RENDER etmesin. parentdeki useCallback'in reactin yaddasina yazdigi deyere gore isleyr.
useMemo =>
  parentin hookunda yazilir. bu funksiya ancaq bu [value] deyisende (componenti ve ya neyise return etsin ve ya) RENDER etsin.
  will remember the returned value from your function
*/
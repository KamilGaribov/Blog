import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import axios from 'axios'
import { apiUrl, } from '../components/variables'
import { IPost, } from '../components/interfaces'
import { Card, MyComponent, CompoH1 } from '../components/card'
import { myTheme, myH1 } from '../components/my-theme'
import { DefaultTheme } from 'styled-components';
import image1 from '../public/article1.jpeg'
import { Container } from '../components/container'
import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import reducer from "../components/reducer";
// import {rootSaga} from '../sagas/rootSaga'





export default function Home({ data }: { data: IPost[] }) {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {data.map((item, i) => {
          return (
            <Card key={i} {...item} landing={i == 0 ? true : false} />
          )
        })}
      </Container>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(apiUrl);
  const data: IPost[] = response.data;
  return {
    props: { data }
  };
}
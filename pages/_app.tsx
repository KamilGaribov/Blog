import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/navbar'
import logo from '../public/logo.svg'
import { createStore, applyMiddleware, Store } from "redux";
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk'
import { reducer } from '../reducers/index'
import rootReducer from '../store';


// const store = createStore(rootReducer)
const store = createStore(reducer, applyMiddleware(thunk))


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar src={logo.src} actionText="create post" />
      <Component{...pageProps} />
    </Provider>
  )
}
export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/navbar'
import logo from '../public/logo.svg'
import { Store } from "redux";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { store } from '../store/store';
import { useSelector } from 'react-redux'
// import { IState } from '../store/reducer'
import { store } from '../store'


function MyApp({ Component, pageProps }: AppProps) {
  // const comments = useSelector<IState, IState['comments']>((state) => state.comments)
  return (
    <Provider store={store}>
      <Navbar src={logo.src} actionText="create post" />
      <Component store={store} {...pageProps} />
    </Provider>
  )
  // return <Component {...pageProps} />
}
export default MyApp

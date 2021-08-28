import type { AppProps } from 'next/app';
import { Navbar } from '../components/navbar';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useLayoutEffect, useState, useEffect } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import { GlobalStyle, initialTheme } from '../folder/globalstyle';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import { pageTransition } from '../folder/functions';
import Head from 'next/head';

const store = createStore(reducer, applyMiddleware(thunk));
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function MyApp({ Component, pageProps }: AppProps) {
    const r = useRouter();
    const router = (path: string) => {
        pageTransition(r, path);
    };
    const [theme, setTheme] = useState<DefaultTheme>(initialTheme.light);
    // switched from useLayoutEffect because of console error. https://github.com/facebook/react/issues/14927
    useIsomorphicLayoutEffect(() => {
        const storage = window.localStorage.getItem('theme');
        if (storage && JSON.parse(storage) == 'dark' && theme != initialTheme.dark) {
            return setTheme(initialTheme.dark);
        }
    }, []);
    const handleTheme = () => {
        setTheme(theme.name == 'light' ? initialTheme.dark : initialTheme.light);
    };
    return (
        <>
            <Head>
                <title>My Blog</title>
                <meta name="description" content="Nice blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="content">
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <Navbar router={router} setTheme={handleTheme} actionText="create post" />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </Provider>
            </div>
        </>
    );
}
export default MyApp;

import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import FontAwesomeTTF from '/public/webfonts/fa-solid-900.ttf';
import FontAwesomeEOT from '/public/webfonts/fa-solid-900.eot';
import FontAwesomeWOFF from '/public/webfonts/fa-solid-900.woff';
import FontAwesomeWOFF2 from '/public/webfonts/fa-solid-900.woff2';
import FontAwesomeIE from '/public/webfonts/fa-solid-900.eot?#iefix';

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string;
        background: string;
        background2: string;
        color: string;
        button: {
            background: string;
            color: string;
        };
    }
}

export interface IGlobalStyle {
    light: DefaultTheme;
    dark: DefaultTheme;
}

export const initialTheme: IGlobalStyle = {
    light: {
        name: 'light',
        background: 'white',
        background2: 'wheat',
        color: '#2D2424',
        button: {
            background: '#2D2424',
            color: 'white',
        },
    },
    dark: {
        name: 'dark',
        background: '#2D2424',
        background2: '#171010',
        color: 'white',
        button: {
            background: 'white',
            color: '#2D2424',
        },
    },
};

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    }
    html, body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        transition: all 0.2s ease-in-out;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    #content {
        transition: ease-in-out opacity;
    }
    #clone {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 999;
        transition: ease-in-out opacity;
    }
    @font-face {
        font-family: "Font Awesome 5 Free";
        font-style: normal;
        font-weight: 900;
        font-display: block;
        src: url(${FontAwesomeTTF}) format("truetype"),
            url(${FontAwesomeEOT}),
            url(${FontAwesomeIE}) format("embedded-opentype"),
            url(${FontAwesomeWOFF2}) format("woff2"),
            url(${FontAwesomeWOFF}) format("woff");
      }
`;

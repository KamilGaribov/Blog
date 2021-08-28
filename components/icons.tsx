import styled from 'styled-components';
import { useTheme } from '../folder/customHooks';
import { useState, useEffect, useRef } from 'react';
import { transition } from '../folder/functions';

const FontAwesome = styled.i`
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    font-style: normal;
    align-self: center;
    justify-self: center;
`;

export const ExclamationCircle = styled(FontAwesome)`
    &:before {
        content: '\f06a';
        color: red;
    }
`;

export const Checked = styled(FontAwesome)`
    &:before {
        content: '\f058';
        font-size: 50px;
        color: green;
    }
`;
export const UnChecked = styled(FontAwesome)`
    &:before {
        content: '\f057';
        font-size: 50px;
        color: red;
    }
`;
export const Light = styled(FontAwesome)`
    &:before {
        content: '\f185';
    }
`;
export const Dark = styled(FontAwesome)`
    &:before {
        content: '\f186';
    }
`;

export const IconContainer = styled.div`
    widht: 100%;
    height: 100%;
    display: grid;
    cursor: pointer;
    color: ${(props) => props.theme.button.background};
`;

export const ThemeIcon = ({ setTheme }: any) => {
    const [mode, setMode] = useTheme();
    const ref: any = useRef<HTMLDivElement>();
    const handleClick = () => {
        setTheme();
        transition(ref.current);
        setMode(mode == 'light' ? 'dark' : 'light');
    };
    // Warning: Prop `className` did not match
    // Used icon with useState.
    // Because styled-component does console error. I think it is rendering both or last one with ternary operator and then classnames crash
    // But with useEffect it works. May be useEffect keeps on hold that icon render, and then it is ok
    const [icon, setIcon] = useState<any>();
    useEffect(() => {
        setIcon(mode == 'light' ? <Dark /> : <Light />);
    }, [mode]);
    return (
        <IconContainer ref={ref} onClick={() => handleClick()}>
            {icon}
        </IconContainer>
    );
};

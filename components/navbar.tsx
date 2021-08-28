import styled from 'styled-components';
import Link from 'next/link';
import { ThemeIcon } from './icons';
import { INavbar } from '../folder/interfaces';
import logo from '../public/logo.svg';
import logoDark from '../public/logo-dark.png';

const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    background: ${(props) => props.theme.background2};
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    margin-bottom: 20px;
    & > div:nth-child(2) {
        display: grid;
        grid-template-columns: 50px auto;
        column-gap: 10px;
    }
`;
const NavbarLogo = styled.div`
    width: 120px;
    height: 50px;
    cursor: pointer;
    // border: 1px solid black;
    background-image: url('${(props) => (props.theme.name == 'light' ? logo.src : logoDark.src)}');
    background-position: left top;
    background-size: 120px 50px;
    background-repeat: no-repeat;
`;
const Button = styled.button`
    padding: 14px 17px;
    color: ${(props) => props.theme.button.color};
    background: ${(props) => props.theme.button.background};
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    border: none;
`;

export const Navbar = ({ actionText, setTheme, router }: INavbar): JSX.Element => {
    return (
        <NavbarContainer>
            <NavbarLogo onClick={() => router('/')} />
            <div>
                <ThemeIcon setTheme={setTheme} />
                <Button onClick={() => router('/posts/new')}>{actionText}</Button>
            </div>
        </NavbarContainer>
    );
};

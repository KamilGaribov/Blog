import styled from 'styled-components';
import Link from 'next/link'

const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    background: wheat;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
`
const NavbarLogo = styled.img`
    width: 100px;
    height: auto;
    cursor: pointer;
`
const Button = styled.button`
    padding: 14px 17px;
    color: white;
    background: #15171a;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    border: none;
`
interface INavbar {
    src: string;
    actionText: string
}

export const Navbar = ({ src, actionText }: INavbar): JSX.Element => {
    return (
        <NavbarContainer>
            <Link href="/">
                <NavbarLogo src={src} />
            </Link>
            <Link href="/posts/new">
                <Button>
                    {actionText}
                </Button>
            </Link>
        </NavbarContainer>
    )
}
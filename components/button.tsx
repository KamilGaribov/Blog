import styled from 'styled-components';

export interface IButton {
    text: string;
    primary: boolean;
}

const ButtonContainer = styled.div<IButton>`
    width: 100%;
    height: 40px;
    padding: 5px 10px;
`

const ButtonEl = styled.button<IButton>`
    width: 100%;
    height: 100%;
    background: ${props => props.primary ? 'blue' : 'red'};
    outline: none;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 5px;
`

export const Button = (props: IButton): JSX.Element => {
    return (
        <ButtonContainer {...props}>
            <ButtonEl type="button" {...props}>{props.text}</ButtonEl>
        </ButtonContainer>
    )
}
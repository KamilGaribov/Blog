import styled from 'styled-components';
import { IButton } from '../folder/interfaces';

const ButtonContainer = styled.div<IButton>`
    width: calc(100% - 80px);
    margin: auto;
    height: 35px;
`;

const ButtonEl = styled.button<IButton>`
    width: 100%;
    height: 100%;
    background: ${(props) => (props.primary ? 'blue' : 'red')};
    outline: none;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 5px;
`;

export const Button = (props: IButton): JSX.Element => {
    return (
        <ButtonContainer {...props}>
            <ButtonEl onClick={() => props.submit()} type="button" {...props}>
                {props.text}
            </ButtonEl>
        </ButtonContainer>
    );
};

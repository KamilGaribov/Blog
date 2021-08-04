import styled from 'styled-components';

// interface IInputProps {
//     type: 'text' | 'number';
//     label: string;
// }
export interface IInput {
    name: string;
    type: 'text' | 'number';
    placeholder?: string;
    label?: string;
}

const InputContainer = styled.div`
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    display: grid;
    grid-template-columns: 50px auto;
`
const Label = styled.label`
    width: 100%;
    align-self: center;
`

const InputEl = styled.input`
    width: 100%;
    height: auto;
    &:focus {
        outline: 1px solid blue;
    }
`

export const Input = ({ name, type, placeholder, label }: IInput): JSX.Element => {
    return (
        <InputContainer>
            <Label htmlFor={name}>{label}</Label>
            <InputEl id={name} name={name} type={type} placeholder={placeholder} />
        </InputContainer>
    )
}
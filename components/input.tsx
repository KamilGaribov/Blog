import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { IInputProps, IInput2Props, IInputLocalState } from '../folder/interfaces';
import { ExclamationCircle } from './icons';

const InputContainer = styled.div`
    width: 100%;
    height: 55px;
    display: grid;
    grid-template-rows: 35px 20px;
    & > div:nth-child(1) {
        display: grid;
        grid-template-columns: 40px auto 40px;
    }
    margin-top: 20px;
`;
const Label = styled.label`
    width: 100%;
    align-self: center;
`;

const InputEl = styled.input`
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    text-indent: 5px;
    &:focus {
        outline: 1px solid blue;
    }
`;
const InputError = styled.span`
    padding-left: 45px;
    font-size: 12px;
    color: red;
`;

export const Input = ({ name, type, placeholder, label, state, action }: IInputProps): JSX.Element => {
    const ref = useRef<HTMLInputElement>(null!);
    const [formItem, setFormItem] = useState<IInputLocalState>({ key: name, value: state });
    useEffect(() => {
        if (state.error == true) {
            ref.current.focus();
        }
    }, [state.error]);
    const handleChange = (value: string) => {
        setFormItem({ ...formItem, value: { ...state, value: value, error: false } });
    };
    return (
        <InputContainer>
            <div>
                <Label htmlFor={name}>{label}</Label>
                <InputEl
                    // return formItem with key value because of not overwriting on reducer
                    onBlur={(e) => action(formItem)}
                    onChange={(e) => handleChange(e.target.value)}
                    ref={ref}
                    defaultValue={state.value}
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    autoComplete="off"
                    spellCheck={false}
                />
                {state.error ? <ExclamationCircle /> : null}
            </div>
            <div>{state.error ? <InputError>This field cannot be left blank</InputError> : null}</div>
        </InputContainer>
    );
};

export const Input2 = ({ name, type, placeholder, keyDown }: IInput2Props): JSX.Element => {
    return (
        <InputContainer>
            <InputEl
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => keyDown(e)}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
                spellCheck={false}
            />
        </InputContainer>
    );
};

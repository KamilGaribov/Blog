import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ILoading } from '../folder/interfaces';
import { Checked, UnChecked } from './icons';
import { FunctionComponent } from 'react';

export const LoadingContainer = styled.div`
    width: 200px;
    height: 200px;
`;
const LoadingSuccess = styled.div`
    width: 200px;
    height: 200px;
    background: ${(props) => props.theme.background2};
    display: grid;
    grid-template-rows: auto 50px 50px;
    & span {
        text-align: center;
    }
`;
const LoadingError = styled.div`
    width: 200px;
    height: 200px;
    background: ${(props) => props.theme.background2};
    display: grid;
    grid-template-rows: auto 50px 50px;
`;

export const Loading: FunctionComponent<ILoading> = (props) => {
    const { value, success, error, successAction, errorAction } = props;
    if (!value) {
        return <>{props.children}</>;
    }
    return (
        <LoadingContainer>
            {success != null ? (
                <LoadingSuccess>
                    <span>{success}</span>
                    <Checked />
                    <button onClick={() => (successAction ? successAction() : null)}>ok</button>
                </LoadingSuccess>
            ) : error != null ? (
                <LoadingError>
                    <span>{error}</span>
                    <UnChecked />
                    <button onClick={() => (errorAction ? errorAction() : null)}>ok</button>
                </LoadingError>
            ) : (
                <img src="/spinner.gif" />
            )}
        </LoadingContainer>
    );
};

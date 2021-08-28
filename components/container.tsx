import styled from 'styled-components';

export const Container = styled.div`
    width: 1080px;
    height: auto;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto auto;
    padding-bottom: 50px;
`;
export const ThinContainer = styled(Container)`
    width: 300px;
    & > h1 {
        text-align: center;
    }
`;

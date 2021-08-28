import styled from 'styled-components';
import { IPaginationItem, IPaginationProps } from '../folder/interfaces';

const PaginationContainer = styled.div``;

const PaginationItem = styled.div<IPaginationItem>`
    width: 40px;
    height: 40px;
    background: ${(props) => (props.active ? 'aqua' : 'wheat')};
    color: black;
    margin: 0 10px 10px 0;
    float: left;
    display: grid;
    align-content: center;
    justify-content: center;
    cursor: pointer;
`;

export const Pagination = ({ page, setPage, pageCount, perPage }: IPaginationProps) => {
    return (
        <PaginationContainer>
            {Array.from({ length: pageCount }).map((item, i) => {
                return (
                    <PaginationItem onClick={() => setPage(i + 1)} key={i} active={i + 1 == page ? true : false}>
                        {i + 1}
                    </PaginationItem>
                );
            })}
        </PaginationContainer>
    );
};

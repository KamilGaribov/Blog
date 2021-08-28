import Head from 'next/head';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { apiUrl } from '../folder/constants';
import { IPost, IPaginationProps } from '../folder/interfaces';
import { Card } from '../components/card';
import { Container } from '../components/container';
import { useState, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Pagination } from '../components/pagination';
import { pageTransition } from '../folder/functions';

export default function Home({ data }: { data: IPost[] }) {
    const userouter = useRouter();
    const router = (path: string) => {
        pageTransition(userouter, path);
    };
    const [page, setPage] = useState(1);
    const perPage = 7;
    const ref = useRef<HTMLDivElement>(null!);
    const handleSetPage = (page: number) => {
        setPage(page);
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    const paginationProps: IPaginationProps = {
        page,
        setPage: handleSetPage,
        pageCount: Math.ceil(data.length / perPage),
    };

    return (
        <Container ref={ref}>
            <div>
                {data.slice((page - 1) * perPage, page * perPage).map((item, i) => {
                    return <Card router={router} key={i} {...item} landing={i == 0 ? true : false} />;
                })}
            </div>
            <Pagination {...paginationProps} />
        </Container>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await axios.get(`${apiUrl}posts/`);
    const data: IPost[] = response.data;
    return {
        props: { data },
    };
};

import { GetServerSideProps } from 'next';
import { apiUrl } from '../../folder/constants';
import { IInput2Props, IPost } from '../../folder/interfaces';
import axios from 'axios';
import Head from 'next/head';
import { Container } from '../../components/container';
import React, { useState } from 'react';
import { Input2 } from '../../components/input';
import { IComment, ILoading, IDetailPage } from '../../folder/interfaces';
import { Form } from '../../components/form';
import api from '../../folder/functions';
import { Loading } from '../../components/loading';

const INITIAL_LOADING = {
    value: false,
    success: null,
    error: null,
};

export default function Id({ data }: { data: IDetailPage }) {
    const { id, title, body }: IPost = data;
    const [loading, setLoading] = useState<ILoading>(INITIAL_LOADING);
    const [comments, setComments] = useState(data.comments);
    const postComment = (e: React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) => {
        const { key } = e as React.KeyboardEvent<HTMLInputElement>;
        const { target } = e as React.ChangeEvent<HTMLInputElement>;
        if (key == 'Enter') {
            setLoading({ ...loading, value: true });
            let form: IComment = {
                postId: id,
                body: target.value,
            };
            api()
                .post('comments/', form)
                .then((response: any) => {
                    form['id'] = response.data.id;
                    comments.push(form);
                    setComments(comments);
                    setLoading(INITIAL_LOADING);
                })
                .catch((error) => {
                    setLoading({ ...loading, value: true, error: 'An error occured while comment posted' });
                });
        }
    };
    const errorAction = () => {
        setLoading(INITIAL_LOADING);
    };
    const inputComment: IInput2Props = {
        type: 'text',
        name: 'comment',
        placeholder: 'comment..',
        keyDown: postComment,
    };
    const loadingProps: ILoading = {
        ...loading,
        errorAction,
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Good post" />
            </Head>
            <Container>
                <h1>{title}</h1>
                <h4>{body}</h4>
                <hr />
                <Loading {...loadingProps}>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Input2 {...inputComment} />
                    </Form>
                </Loading>
                <hr />
                <ul>
                    {comments.map((item: IComment, i: number) => {
                        return <li key={i}>{item.body}</li>;
                    })}
                </ul>
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params?.id;
    const response = await axios.get(`${apiUrl}posts/${id}?_embed=comments`);
    const data: IDetailPage[] = response.data;
    return {
        props: { data },
    };
};

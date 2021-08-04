import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { apiUrl, } from '../../components/variables'
import { IPost, } from '../../components/interfaces'
import axios from 'axios'
import Head from 'next/head'
import { Container, ThinContainer } from '../../components/container'
import { Input, IInput } from '../../components/input'
import { Button, IButton } from '../../components/button'
import React, { FunctionComponent, useState, useRef } from 'react';


export default function Create() {
    const InputTitle: IInput = {
        type: 'text',
        name: 'title',
        placeholder: 'comment..',
        label: 'Title',
    }
    const InputBody: IInput = {
        type: 'text',
        name: 'body',
        placeholder: 'body..',
        label: 'Body',
    }
    const ButtonSubmit: IButton = {
        primary: true,
        text: 'post',
    }
    return (
        <ThinContainer>
            <h1>create a post</h1>
            <form>
                <Input {...InputTitle} />
                <Input {...InputBody} />
                <Button {...ButtonSubmit} />
            </form>
        </ThinContainer>
    )
}
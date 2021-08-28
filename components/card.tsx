import styled from 'styled-components';
import React, { useState } from 'react';
import image from '../public/post-img.jpg';
import { ICardProps, ICardLanding } from '../folder/interfaces';

const CardContainer = styled.div<ICardLanding>`
    margin: 10px 20px;
    display: grid;
    width: ${(props) => (props.landing ? 'auto' : '320px')};
    height: ${(props) => (props.landing ? '380px' : '400px')};
    grid-template-rows: ${(props) => (props.landing ? '1fr' : '220px auto')};
    grid-template-columns: ${(props) => (props.landing ? '680px auto' : '1fr')};
    cursor: pointer;
    float: left;
    overflow: hidden;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: ${(props) => (props.landing ? '380px' : '220px')};
        left: 0;
        top: 0;
        border: ${(props) => (props.landing ? 'none' : props.hover ? '10px solid white' : '0px solid white')};
        transition: all 0.2s ease-in-out;
        z-index: 1;
        box-sizing: border-box;
    }
`;
const CardImage = styled.img`
    width: 100%;
    height: 100%;
`;
const CardContent = styled.div`
    widht: 100%;
    height: 100%;
`;
const CardH3 = styled.h3<ICardLanding>`
    margin: 0;
    padding: 10px;
    font-weight: bold;
    font-size: ${(props) => (props.landing ? '30px' : '18px')};
`;
const CardP = styled.p`
    margin: 0;
    padding: 10px;
    color: #738a94;
`;

export const Card = ({ id, title, body, src, landing, router }: ICardProps): JSX.Element => {
    const [hover, setHover] = useState<boolean>(false);
    return (
        <CardContainer
            onClick={() => router(`/posts/${id}`)}
            landing={landing}
            hover={hover}
            onMouseOver={() => setHover(!hover)}
            onMouseOut={() => setHover(!hover)}
        >
            <CardImage src={src ? src : image.src} />
            <CardContent>
                <CardH3 landing={landing}>{title}</CardH3>
                <CardP>{body?.length > 180 ? body.slice(0, 180) + '...' : body}</CardP>
            </CardContent>
        </CardContainer>
    );
};

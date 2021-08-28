import axios from 'axios';
import { apiUrl } from './constants';

export default function api() {
    return axios.create({
        baseURL: apiUrl,
    });
}

export const transition = (item: HTMLElement) => {
    item.style.transitionDuration = '0s';
    item.style.opacity = '0';
    setTimeout(() => {
        item.style.transitionDuration = '1s';
        item.style.opacity = '1';
    }, 10);
};

export const pageTransition = (useRouter: any, path: string) => {
    let body: HTMLDivElement = document.querySelector('#__next')!;
    let content: HTMLDivElement = document.querySelector('#content')!;
    let clone: Node = content.cloneNode(true);
    let cloneDiv: HTMLDivElement = document.createElement('div')!;
    cloneDiv.setAttribute('id', 'clone');
    cloneDiv.append(clone);
    body.append(cloneDiv);
    content.style.transitionDuration = '0s';
    content.style.opacity = '0';
    setTimeout(() => {
        cloneDiv.style.transitionDuration = '.3s';
        cloneDiv.style.opacity = '0';
        useRouter.push(path);
    }, 50);
    setTimeout(() => {
        body.removeChild(cloneDiv);
        content.style.transitionDuration = '.3s';
        content.style.opacity = '1';
    }, 1200);
};

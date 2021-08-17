import axios from 'axios'
import api from '../components/api'
import { Dispatch } from 'redux';

export const getPosts = () => (dispatch: Dispatch) => {
    api().get('').then((response) => {
        dispatch({ type: 'GET_POSTS', payload: response.data })
    }).catch(() => {
        dispatch({
            type: 'GET_POSTS_ERROR',
            payload: 'Something went wrong'
        })
    })
}
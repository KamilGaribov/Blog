import api from '../folder/functions';
import { Dispatch } from 'redux';
import { ICreatePostFormItem, IFormItem } from '../folder/interfaces';

export const createPostFormInputChange =
    (formItem: IFormItem): any =>
    (dispatch: Dispatch) => {
        console.log('--', formItem);
        dispatch({ type: 'CREATE_POST_FORM_INPUT_CHANGE', payload: formItem });
    };

export const createPostFormInputError = (key: string, value: ICreatePostFormItem) => (dispatch: Dispatch) => {
    dispatch({ type: 'CREATE_POST_FORM_INPUT_ERROR', payload: { key, value } });
};

export const createPostFormPost = (form: any) => (dispatch: Dispatch) => {
    dispatch({ type: 'CREATE_POST_FORM_LOADING' });
    api()
        .post('posts/', form)
        .then((response: any) => {
            if (response.status == 201) {
                return dispatch({ type: 'CREATE_POST_FORM_SUCCESS', payload: 'Post has posted successfully' });
            }
        })
        .catch((error) => {
            return dispatch({ type: 'CREATE_POST_FORM_ERROR', payload: error.message });
        });
};

export const createPostFormDone = () => (dispatch: Dispatch) => {
    dispatch({ type: 'CREATE_POST_FORM_DONE' });
};

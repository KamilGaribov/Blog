const INITIAL_STATE = {
    loading: {
        value: false,
        success: null,
        error: null,
    },
    createPostForm: {
        title: {
            value: '',
            required: true,
            error: false,
        },
        body: {
            value: '',
            required: true,
            error: false,
        },
    },
};

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'CREATE_POST_FORM_INPUT_CHANGE':
            return {
                ...state,
                createPostForm: { ...state.createPostForm, [action.payload.key]: { ...action.payload.value } },
            };
        case 'CREATE_POST_FORM_INPUT_ERROR':
            return {
                ...state,
                createPostForm: {
                    ...state.createPostForm,
                    [action.payload.key]: { ...action.payload.value, error: true },
                },
            };
        case 'CREATE_POST_FORM_LOADING':
            return { ...state, loading: { ...state.loading, value: true } };
        case 'CREATE_POST_FORM_SUCCESS':
            return { ...state, loading: { ...state.loading, success: action.payload } };
        case 'CREATE_POST_FORM_ERROR':
            return { ...state, loading: { ...state.loading, error: action.payload } };
        case 'CREATE_POST_FORM_DONE':
            return {
                ...state,
                loading: { value: false, success: null, error: null },
                createPostForm: {
                    title: {
                        value: '',
                        required: true,
                        error: false,
                    },
                    body: {
                        value: '',
                        required: true,
                        error: false,
                    },
                },
            };
        default:
            return state;
    }
};

export default reducer;

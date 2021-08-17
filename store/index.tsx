import { combineReducers } from 'redux'

interface IAppState {
    user: any;
    categories: any;
    records: any;
}

const rootReducer = combineReducers({
    user: () => {},
    categories: () => {},
    records: () => {},
})

export default rootReducer
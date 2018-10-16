import {createStore} from 'redux';
import rootReducer from './reducers';
const defaultState = {

    articles: []
}

const store = createStore(
    rootReducer, defaultState
    + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
import {createStore} from 'redux'
import MovieReducers from '../reducers/CardMovie'

const store =createStore(MovieReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;
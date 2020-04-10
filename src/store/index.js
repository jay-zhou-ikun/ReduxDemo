import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__?
//     window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}):compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
    reducer,
    applyMiddleware(thunk)
    // enhancer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
export default store
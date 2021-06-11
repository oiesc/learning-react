import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import counterReducer from './ducks/counter'
import userReducer from './ducks/user'
import avatarReducer from './ducks/avatar'
import { watcherSaga } from './sagas/rootSaga';

// items ready to use
const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    avatar: avatarReducer
})

const SagaMiddleware = createSagaMiddleware();

const middleware = [SagaMiddleware];

const store = createStore(
    reducer,
    {}, applyMiddleware(...middleware)
);

SagaMiddleware.run(watcherSaga)

export default store;
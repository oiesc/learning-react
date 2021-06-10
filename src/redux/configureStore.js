import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import counterReducer from './ducks/counter'
import userReducer from './ducks/user'
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

const SagaMiddleware = createSagaMiddleware();

const middleware = [SagaMiddleware];

const store = createStore(
    reducer,
    {}, applyMiddleware(...middleware)
);

SagaMiddleware.run(watcherSaga)

export default store;
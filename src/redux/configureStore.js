// reduce toolkit
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
// when use api request
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import user from './ducks/userSlice';
import counterReducer from './ducks/counter';
import avatar from './ducks/avatar'

const sagaMiddleware = createSagaMiddleware()

// aways use combineReducers
const reducer = combineReducers({
    counter: counterReducer,
    user: user,
    avatar: avatar,
});

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

sagaMiddleware.run(watcherSaga)

export default store
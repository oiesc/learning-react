import { call, put } from 'redux-saga/effects'
import { setAvatar } from '../../ducks/avatar'
import { requestGetAvatar } from '../requests/avatar'

export function* handleGetAvatar(action) {
    try {
        const response = yield call(requestGetAvatar);
        const { data } = response;
        yield put(setAvatar(data))
    }
    catch (error) {
        console.log(error);
    }
}
import { takeLatest } from "redux-saga/effects"
import { handleGetUser } from "./handlers/user"
import { getUser } from "../ducks/userSlice"
import { getAvatar } from '../ducks/avatar'
import { handleGetAvatar } from "./handlers/avatar"

export function* watcherSaga() {
    yield takeLatest(getUser.type, handleGetUser)
    yield takeLatest(getAvatar.type, handleGetAvatar)
}
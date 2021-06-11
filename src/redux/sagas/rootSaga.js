import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { handleGetAvatar } from "./handlers/avatar"
import { GET_USER } from "../ducks/user";
import { GET_AVATAR } from "../ducks/avatar"

export function* watcherSaga() {
    yield takeLatest(GET_USER, handleGetUser);
    yield takeLatest(GET_AVATAR, handleGetAvatar);
}

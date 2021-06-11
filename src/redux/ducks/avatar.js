export const GET_AVATAR = 'GET_AVATAR';
const SET_AVATAR = 'SET_AVATAR'

export const getAvatar = () => ({
    type: GET_AVATAR
});

export const setAvatar = (avatar) => ({
    type: SET_AVATAR,
    avatar
});

const initialState = {
    avatar: undefined
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AVATAR:
            const { avatar } = action;
            // ever return all state before
            return { ...state, avatar };
        default:
            return state;
    }
}
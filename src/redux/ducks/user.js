export const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER'

export const getUser = () => ({
    type: GET_USER
});

export const setUser = (user) => ({
    type: SET_USER,
    user
});

const initialState = {
    user: undefined
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            const { user } = action;
            // ever return all state before
            return { ...state, user };
        default:
            return state;
    }
}
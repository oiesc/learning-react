const INCREMENT = 'increment';
const DECREMENT = 'decrement';

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

const initialState = {
    count: 0
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            // ever return all state before
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            // return initialState because this value will be be reset after change page
            return initialState;
    }
}
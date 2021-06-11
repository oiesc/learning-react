const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// export function to use in dispatch
export const increment = () => ({
    type: INCREMENT
});

// export function to use in dispatch
export const decrement = () => ({
    type: DECREMENT
});

// initial state for count variable
const initialState = {
    count: 0
};

// reduce function to make State changes
// side effects, only as applicable

// export default function reduceCounter(state = initialState, action)
// disable the warning about default export, or change to the sintax above
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
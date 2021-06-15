// using redux toolkit
// use createSlice to do all work here
const { createSlice, current } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: 'counter',
    initialState: [{ total: 0 }],

    reducers: {
        setCounter: (state, action) => {
            const { id } = action.payload
            // if user counter no exist
            if (!state[id])
                state.push(action.payload)
        },

        increment: (state, action) => {
            const { id } = action.payload
            current(state).map(function (key) {
                const { id: stateId } = key
                if (stateId === id) {
                    return (
                        state[0].total = state[0].total + 1,
                        state[stateId].value = state[stateId].value + 1
                    )
                }
                return state
            })
        },
        decrement: (state, action) => {
            const { id } = action.payload
            current(state).map(function (key) {
                const { id: stateId } = key
                if (stateId === id) {
                    if (state[stateId].value > 0)
                        return (
                            state[0].total = state[0].total - 1,
                            state[stateId].value = state[stateId].value - 1
                        )
                }
                return state
            })
        },
        /*  reset: (state) => {
             state.value = 0
         }, */
        // if pass amount 
        /* incrementByAmout: (state, action) => {
            state.value += action.payload
        }, */
    },
})
// Action creators are generated for each case reducer function
export const { increment, decrement, setCounter } = counterSlice.actions

export default counterSlice.reducer

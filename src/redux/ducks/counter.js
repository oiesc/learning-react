// using redux toolkit

// use createSlice to do all work here
const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },

    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        // if pass amount 
        incrementByAmout: (state, action) => {
            state.value += action.payload
        },
    }
})
// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmout } = counterSlice.actions

export default counterSlice.reducer

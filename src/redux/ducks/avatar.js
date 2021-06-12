import { createSlice } from "@reduxjs/toolkit";

const avatarSlice = createSlice({
    name: 'avatar',
    initialState: {},
    reducers: {
        getAvatar() { },
        setAvatar(state, action) {
            const avatarData = action.payload
            return { ...state, ...avatarData }
        }
    }
})

export const { getAvatar, setAvatar } = avatarSlice.actions

export default avatarSlice.reducer
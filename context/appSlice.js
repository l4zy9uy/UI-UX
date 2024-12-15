import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isAppReady: false,
    },
    reducers: {
        setAppReady(state, action) {
            state.isAppReady = action.payload;
        },
    },
});

export const { setAppReady } = appSlice.actions;
export default appSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'light', // Default theme mode
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});

// Export the action
export const { toggleTheme } = themeSlice.actions;

// Export the reducer
export default themeSlice.reducer;
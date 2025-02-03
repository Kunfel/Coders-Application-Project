// src/redux/workspaceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const workspaceSlice = createSlice({
    name: 'workspace',
    initialState: {
        code: '',
        language: 'javascript', // Default language
        fontSize: 14, // Default font size
        tests: [], // Placeholder for tests
    },
    reducers: {
        updateCode: (state, action) => {
            state.code = action.payload;
        },
        updateLanguage: (state, action) => {
            state.language = action.payload;
        },
        updateFontSize: (state, action) => {
            state.fontSize = action.payload;
        },
        setTests: (state, action) => {
            state.tests = action.payload;
        },
    },
});

export const { updateCode, updateLanguage, updateFontSize, setTests } = workspaceSlice.actions;
export default workspaceSlice.reducer;
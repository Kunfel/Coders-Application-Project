import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import themeReducer from "./slices/themeSlice";
import workspaceReducer from "./slices/workspaceSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    workspace: workspaceReducer,
  },
});

export default store;

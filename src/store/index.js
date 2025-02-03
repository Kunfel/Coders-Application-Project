import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import themeReducer from "./slices/themeSlice";
import workspaceReducer from "./slices/workspaceSlice";
import { graphqlApi } from "../api/graphql";

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    workspace: workspaceReducer,
    [graphqlApi.reducerPath]: graphqlApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(graphqlApi.middleware),
});

export default store;
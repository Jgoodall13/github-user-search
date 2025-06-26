import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import { githubApi } from "../store/apiSlice";
// ...

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling and other features of `createApi`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

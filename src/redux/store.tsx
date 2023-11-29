import {configureStore} from "@reduxjs/toolkit";
import createEventReducer from "./createEventSlice";

const store = configureStore({
  reducer: {
    event: createEventReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FormState} from "../components/organisms/createEvent/organisms/leftPanel";

export type Event = {
  events: Array<FormState>;
};

const initialState: Event = {
  events: [],
};

const createEventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    createEvent: (state, action: PayloadAction<FormState>) => {
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    },
  },
});

export default createEventSlice.reducer;
export const {createEvent} = createEventSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    status: ""
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setStatusFilter: {
            reducer(state, action) {
            state.status = action.payload;
          },
          prepare(value) {
            return {
                payload: value
            };
          },
       },
    },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;




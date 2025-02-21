import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",

    initialState: {
        name: "",
    },

    reducers: {
        selectNameFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const { selectNameFilter } = filterSlice.actions;

export default filterSlice.reducer;

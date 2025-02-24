import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",

    initialState: {
        searchText: "",
    },

    reducers: {
        selectSearchTextFilter(state, action) {
            state.searchText = action.payload;
        },
    },
});

export const { selectSearchTextFilter } = filterSlice.actions;

export default filterSlice.reducer;

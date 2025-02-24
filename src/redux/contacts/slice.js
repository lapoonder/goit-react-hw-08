import { createSlice } from "@reduxjs/toolkit";
import {
    fetchContacts,
    addContact,
    deleteContact,
    editContact,
} from "./operations";
import { logOut } from "../auth/operations";

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(
                    (contact) => contact.id !== action.payload.id
                );
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(editContact.pending, handlePending)
            .addCase(editContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(
                    (contact) => contact.id !== action.payload.id
                );
                state.items.push(action.payload);
            })
            .addCase(logOut.fulfilled, () => initialState)
            .addCase(editContact.rejected, handleRejected);
    },
});

export default contactsSlice.reducer;

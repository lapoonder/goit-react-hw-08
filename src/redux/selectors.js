import { createSelector } from "@reduxjs/toolkit";
export const contactsSlice = (state) => state.contacts;
export const contactsDB = (state) => state.contacts.items;
export const searchName = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
    [contactsDB, searchName],
    (contacts, searchtext) => {
        if (searchtext) {
            return contacts.filter((contact) =>
                contact.name.toLowerCase().includes(searchtext.toLowerCase())
            );
        }
        return contacts;
    }
);

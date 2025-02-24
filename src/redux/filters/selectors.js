import { createSelector } from "@reduxjs/toolkit";
import { contactsDB } from "../../redux/contacts/selectors.js";
export const searchText = (state) => state.filters.searchText;

export const selectFilteredContacts = createSelector(
    [contactsDB, searchText],
    (contacts, search) => {
        if (search) {
            // return contacts.filter((contact) =>
            //     contact.name.toLowerCase().includes(searchtext.toLowerCase())
            // );
            return contacts.filter(
                ({ name, number }) =>
                    name.toLowerCase().includes(search.toLowerCase()) ||
                    number.includes(search)
            );
        }
        return contacts;
    }
);

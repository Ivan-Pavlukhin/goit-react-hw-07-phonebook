import { createSelector } from "@reduxjs/toolkit"

const getContacts = state => state.contacts;
const getFilter = state => state.filter;
const getIsLoading = state => state.loading;

const getVisibleContacts = createSelector([getFilter, getContacts],
    (filter, contacts) => {
        const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    })
  
export default {
    getContacts, getFilter, getIsLoading, getVisibleContacts
}
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filters;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filters) => {
    console.log(Date.now());
    return (
      contacts.filter(contact =>
        contact.name.toLowerCase().trim().includes(filters.toLowerCase())
      ) || contacts
    );
  }
);

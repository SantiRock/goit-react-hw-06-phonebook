import { configureStore } from "@reduxjs/toolkit";
import { contactsReducers } from "./sliceContacts";
import { filterReducer } from "./sliceFilter";

export const store = configureStore({
    reducer: {
        contacts: contactsReducers,
        filter: filterReducer,
    }
})
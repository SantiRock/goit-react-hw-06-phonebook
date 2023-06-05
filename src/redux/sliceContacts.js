import { createSlice, nanoid } from "@reduxjs/toolkit";

// Primer estado ----

//const contactsInitialState = JSON.parse(window.localStorage.getItem('contacts'));
const contactsInitialState = [];
// Slice -----

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
       addContact : {
            reducer(state, action) {
            
                for (let contact of state) {
                    if(contact.name.toLowerCase() === action.payload.name.toLowerCase()) {
                        //setMessage(name + ' is already in contacts')
                        alert(action.payload.name + ' is already in contacts')
                        return 
                    }
                }
                state.push(action.payload);
            },
            prepare(personObject) {
                return {
                    payload: {
                        name: personObject.name,
                        number: personObject.number,
                        id: nanoid(),
                    },
                };
            },
        },
       deleteContact(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
       },
    },
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducers = contactsSlice.reducer;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { contactsReducers } from "./sliceContacts";
import { filterReducer } from "./sliceFilter";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
}

const rootReducer = combineReducers({
    filter: filterReducer,
    contacts: contactsReducers,
})

const persistedReducer = persistReducer(persistConfig, rootReducer) 

export const store =  configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);


/*
export default () => {
    let store = configureStore({
        reducer: {
            contacts: persistedReducer,
            filter: filterReducer,
        }
    })
    let persistor = persistStore(store)
    return { store, persistor }
}

const store = configureStore({
    reducer: {
        contacts: contactsReducers,
        filter: filterReducer,
    }
})*/
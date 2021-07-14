import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./phonebook/phonebook-reducer"
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



// const rootReducer = (state = {contacts: [], filter: ""}, action) => state

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV ==='development',
});
// const store = createStore(persistedReducer, composeWithDevTools())

const persistor = persistStore(store)

export default {store, persistor};
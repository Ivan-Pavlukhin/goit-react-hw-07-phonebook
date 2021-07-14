import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions"

const initialState = []

const contactReducer = createReducer(initialState, {
    [actions.addContact]: (state, action) => [...state, action.payload],
    [actions.deleteContact]: (state, action) =>
        state.filter(({ id }) => id !== action.payload),
})


const filterReducer = createReducer('', {
    [actions.findContacts]: (_, action) => action.payload,
})

export default combineReducers({
    contacts: contactReducer,
    filter: filterReducer
})

// example

// function contactReducer(state = initialState, {type, payload}) {
//     switch (type) {
//         case actionTypes.ADD_CONTACT:
//             return [...state, payload];
//         case actionTypes.DEL_CONTACT:
//             return state.filter(({id}) => id !== payload)
//         default: return state;
//     }
// }

// function filterReducer(state = '', action) {
//     switch (action.type) {
//         case actionTypes.FILTER_CONTACT:
//             return action.payload
//         default: return state;
//     }
// }
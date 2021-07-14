import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";


const addContact = createAction('phonebook/add', contact => {
    return {
        payload: {
            name: contact.name,
            number: contact.number,
            id: uuidv4(),
    }
    }
})

// const addContact = (contact) => ({
//     type: actionTypes.ADD_CONTACT,
    // payload: {
    //     name: contact.name,
    //     number: contact.number,
    //     id: uuidv4(),
    // }
// })

const deleteContact = createAction('phonebook/delete')

// const deleteContact = id => ({
//     type: actionTypes.DEL_CONTACT,
//     payload: id,
// })

const findContacts = createAction('phonebook/find')

// const findContacts = value => ({
//     type: actionTypes.FILTER_CONTACT,
//     payload: value
// })

export default { addContact, deleteContact, findContacts };
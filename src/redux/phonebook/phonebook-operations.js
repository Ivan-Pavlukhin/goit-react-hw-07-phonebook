import axios from "axios";
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from "./phonebook-actions"

// axios.default.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest())

    axios.get('http://localhost:4040/contacts')
        .then(({ data }) => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error)))
}

const addContact = (contact) => dispatch => {
        
    const newContact = {name: contact.name, number: contact.number}
    dispatch(addContactRequest())


    axios.post('http://localhost:4040/contacts', newContact)
        .then(({data}) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)))
}

const deleteContact = (id) => dispatch => {
    dispatch(deleteContactRequest())

    axios.delete(`http://localhost:4040/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)))
}

export default {addContact, deleteContact, fetchContacts}
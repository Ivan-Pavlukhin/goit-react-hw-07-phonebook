import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";
import FindContacts from "./components/FindContacts/FindContacts";
import style from "./App.module.css";
import { connect } from "react-redux";
import actions from "./redux/phonebook/phonebook-actions"

function App({contacts, filter, addContact, changeFilter, deleteContact}){
  // state = {
  //   contacts: [ { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },],
  //   filter: "",
  // };

  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'))
  //   if (contacts) {
  //     this.setState({contacts: contacts})
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const prevContacts = prevState.contacts;
  //   const nextContacts = this.state.contacts;

  //   if (prevContacts !== nextContacts) {
  //      localStorage.setItem('contacts', JSON.stringify(nextContacts))
  //   }
   
  // }

  // addContact = ({ name, number }) => {
  //   const contact = {
  //     name,
  //     number,
  //     id: uuidv4(),
  //   };

  //   this.setState(({ contacts }) => ({
  //     contacts: [contact, ...contacts],
  //   }));
  // };

  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // findContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // deleteContact = (contactId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter(
  //       (contact) => contact.id !== contactId
  //     ),
  //   }));
  // };

  
    // const visibleContacts = this.findContacts();
    return (
      <div className={style.wrapper}>
        <h1>Phonebook</h1>
        <AddContact />
        <FindContacts value={filter} onChange={changeFilter} />
        <ContactsList
          // contactsList={visibleContacts}
          onClick={deleteContact}
        />
      </div>
    );
  
}

const mapPropsToState = state => ({
  contacts: state.contacts,
  filter: state.filter,
})

const mapDispatchToState = dispatch => ({
  changeFilter: ({ filter }) => dispatch(actions.findContacts({ filter })),
  deleteContact: ({id}) => dispatch(actions.deleteContact({id}))
})

export default connect(mapPropsToState, mapDispatchToState)(App)
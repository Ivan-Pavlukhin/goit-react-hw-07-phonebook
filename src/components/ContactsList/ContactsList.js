import PropTypes from "prop-types";
import style from "./ContactsList.module.css";
import { connect } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions"
const ContactsList = ({ contactsList, onClick }) => {
  return (
    <>
      <ul className={style.list}>
        {contactsList && contactsList.map((item) => (
          <li key={item.id} className={style.item}>
            <span>
              {item.name}: {item.number}
            </span>
            <button
              className={style.list__button}
              onClick={() => onClick(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired
};


const findContacts = (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

const mapPropsToState = ({filter, contacts}) => ({
  contactsList: findContacts(filter, contacts)
})

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(actions.deleteContact(id))
})

export default connect(mapPropsToState, mapDispatchToProps)(ContactsList)
import PropTypes from "prop-types";
import style from "./FindContacts.module.css";
import { connect } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions"
const FindContacts = ({ value, onChange }) => (
  <>
    <h1>Contacts</h1>
    <label>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);

FindContacts.propsTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const mapPropsToState = state => ({
  contacts: state.contacts,
  value: state.filter
})

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.findContacts(e.currentTarget.value)) 
})

export default connect(mapPropsToState, mapDispatchToProps)(FindContacts)


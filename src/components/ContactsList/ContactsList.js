import ContactItem from "./ContactsListItem.js";
import PropTypes from "prop-types";

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts().map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;

ContactsList.prototype = {
  findContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

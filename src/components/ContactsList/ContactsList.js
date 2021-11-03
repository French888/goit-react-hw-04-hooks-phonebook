import ContactItem from "./ContactsListItem.js";
import PropTypes from "prop-types";

const ContactsList = ({ findContact, onDeleteContact }) => {
  return (
    <ul>
      {findContact.map(({ id, name, number }) => {
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

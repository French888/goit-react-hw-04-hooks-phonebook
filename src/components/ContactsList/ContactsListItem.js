import PropTypes from "prop-types";

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button type="submit" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;

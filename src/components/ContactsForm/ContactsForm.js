import { useState } from "react";
import PropsType from "prop-types";
import { v4 as uuid } from "uuid";

function ContactsForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = uuid();
  const numberInputId = uuid();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          id={nameInputId}
        />
      </label>
      <label htmlFor={numberInputId}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          id={numberInputId}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactsForm.PropsType = {
  onSubmit: PropsType.func.isRequired,
};

export default ContactsForm;

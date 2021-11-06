import { useState, useEffect } from "react";
import ContactsForm from "./components/ContactsForm";
import ContactsList from "./components/ContactsList";
import Container from "./components/Container";
import Filter from "./components/Filter/Filter";
import { v4 as uuid } from "uuid";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: uuid(),
      name,
      number,
    };

    if (contacts.find((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <Container>
      <h1> PhoneBook </h1>
      <ContactsForm onSubmit={addContact} contacts={contacts} />

      <div>
        <h2> Contacts </h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList contacts={findContacts} onDeleteContact={deleteContact} />
      </div>
    </Container>
  );
}

export default App;

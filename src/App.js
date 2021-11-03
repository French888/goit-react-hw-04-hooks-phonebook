import React, { Component } from "react";
import ContactsForm from "./components/ContactsForm";
import ContactsList from "./components/ContactsList";
import Container from "./components/Container";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
componentDidMount(){
  const localProduct = localStorage.getItem('products');
  const parseProduct = JSON.parse(localProduct);
  if(parseProduct){
    this.setState({contacts: parseProduct})
  }
};

componentDidUpdate(prevProps, prevState){

  if(prevState.contacts !== this.state.contacts)
  localStorage.setItem('products', JSON.stringify(this.state.contacts))
}

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  // contact.name  имя обьекта === name из инпута
  hasContacts = (name) => {
    return this.state.contacts.some((contact) => {
      return contact.name.toLocaleLowerCase() === name.toLocaleLowerCase();
    });
  };

  // вызываем hasContact где найденое имя массива совпадает
  // с именем введенным в инпут то if (false) не выполнится будет алерт

  addContact = (contact) => {
    if (!this.hasContacts(contact.name)) {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };

  findContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    if (filter.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    } else {
      return contacts;
    }
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const visibleContact = this.findContact();
    return (
      <Container>
        <h1> PhoneBook </h1>
        <ContactsForm onSubmit={this.addContact} />

        <div>
          <h2> Contacts </h2>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactsList
            findContact={visibleContact}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </Container>
    );
  }
}

export default App;

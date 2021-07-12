import './App.css';
import { Component } from 'react';
// import Swal from 'sweetalert2';
// import shortid from 'shortid';
import { RiContactsFill, RiUserAddFill } from 'react-icons/ri';
import FilterContacts from './helpers/FilterContacts';

import { Section } from './components/Section/Section';
import { Container } from './components/Container/Container';
import { ContainerContacts, ContainerAdd } from './components/Container/Container.styles';
import PhoneBookList from './components/PhoneBookList/PhoneBooklist';
import { PhoneBookForm } from './components/PhoneBookForm/PhoneBookForm';
import { Filter } from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleDeleteContact = e => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== e.target.id),
    });
  };

  // handleChangeFilter = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  render() {
    const contacts = FilterContacts(this.state.contacts, this.state.filter);
    return (
      <>
        <Section title="Phone Book">
          <Container>
            <ContainerAdd>
              <h1>
                <RiUserAddFill /> Add Contact
              </h1>
              <PhoneBookForm name={this.state.name} number={this.state.number} />
            </ContainerAdd>

            <ContainerContacts>
              <h2>
                <RiContactsFill />
                Contacts
              </h2>
              <Filter
                filterValue={this.state.filter}
                // onSetFilter={this.handleChangeFilter}
              />
              {contacts.length > 0 && (
                <PhoneBookList onDeleteContact={this.handleDeleteContact} contacts={contacts} />
              )}
            </ContainerContacts>
          </Container>
        </Section>
      </>
    );
  }
}

export default App;

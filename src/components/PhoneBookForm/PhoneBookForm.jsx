import { Form, Label, Input, Button, ContainerForm } from './PhoneBookForm.styles';
import { RiUserLine, RiPhoneLine, RiUserAddLine } from 'react-icons/ri';
import Swal from 'sweetalert2';
import shortid from 'shortid';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class PhoneBookForm extends Component {
  // ({ onSetUserInfo, onAddContact, name, number }) => {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  nameInputId = shortid();
  telInputId = shortid();
  contactId = shortid();

  handleSetUserInfo = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleAddContact = e => {
    e.preventDefault();
    if (this.state.contacts.some(el => el.name === this.state.name)) {
      return Swal.fire({
        position: 'center',
        title: `Sorry, ${this.state.name} is already in contacts!`,
      });
    }
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: shortid.generate(),
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
      name: '',
      number: '',
    }));
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleAddContact} action="">
        <ContainerForm>
          <Input
            onChange={this.handleSetUserInfo}
            id={this.nameInputId}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Name"
            autoComplete="off"
            maxLength="40"
            required
          />
          <Label htmlFor={this.nameInputId}>
            <RiUserLine size="25" />
            Name
          </Label>
        </ContainerForm>
        <ContainerForm>
          <Input
            onChange={this.handleSetUserInfo}
            id={this.telInputId}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="111-11-11"
            autoComplete="off"
            maxLength="15"
            required
          />
          <Label htmlFor={this.telInputId}>
            <RiPhoneLine size="25" />
            Number
          </Label>
        </ContainerForm>
        <Button type="submit">
          <RiUserAddLine />
          Add contact
        </Button>
      </Form>
    );
  }
}

PhoneBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Input.propTypes = {
  onInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

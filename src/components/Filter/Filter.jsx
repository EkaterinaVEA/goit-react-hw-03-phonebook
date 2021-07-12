import { RiFilter2Line } from 'react-icons/ri';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Component } from 'react';
import { FilterContainer, Label, Input } from './Filter.styles';

export class Filter extends Component {
  state = {
    value: '',
  };
  // = ({ onSetFilter, filterValue }) => (

  filterInputId = shortid();

  handleChangeFilter = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <FilterContainer>
          <Input
            id={this.filterInputId}
            name="filter"
            onChange={this.handleChangeFilter}
            type="text"
            value={value}
            placeholder="Name"
          />
          <Label htmlFor={this.filterInputId}>
            <RiFilter2Line size="30" />
            Find contact by name
          </Label>
        </FilterContainer>
      </>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};

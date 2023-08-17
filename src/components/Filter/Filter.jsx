import PropTypes from 'prop-types';
import { Component } from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';

export default class Filter extends Component {
  static propTypes = {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
  };

  render() {
    const { filter, onFilter } = this.props;

    return (
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" onChange={onFilter} value={filter} />
      </FilterLabel>
    );
  }
}
import PropTypes from 'prop-types';

import { FilterLabel, FilterInput } from './Filter.styled';

 const Filter = ({filter, onFilter}) =>{
  

  

    return (
      <>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" onChange={onFilter} value={filter} />
      </FilterLabel>
      </>
    );
  
 
}
export default Filter;
Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

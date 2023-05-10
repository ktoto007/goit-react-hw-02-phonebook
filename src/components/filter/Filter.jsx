import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';
export const Filter = ({ filtredParam }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <FilterInput type="text" name="filter" onChange={filtredParam} />
    </label>
  );
};

Filter.propTypes = {
  filtredParam: PropTypes.func.isRequired,
};

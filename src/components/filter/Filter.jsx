import PropTypes from 'prop-types';

export const Filter = ({ filtredParam }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" name="filter" onChange={filtredParam} />
    </label>
  );
};

Filter.propTypes = {
  filtredParam: PropTypes.func.isRequired,
};

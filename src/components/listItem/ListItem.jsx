import PropTypes from 'prop-types';

export const ListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" id={id} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

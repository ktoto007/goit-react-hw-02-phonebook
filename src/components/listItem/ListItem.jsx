import PropTypes from 'prop-types';
import { ElementContent, StyledListItem } from './ListItem.styled';
export const ListItem = ({ id, name, number, deleteContact }) => {
  return (
    <StyledListItem>
      <ElementContent>
        {name}: {number}
      </ElementContent>
      <button type="button" className="button" id={id} onClick={deleteContact}>
        Delete
      </button>
    </StyledListItem>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

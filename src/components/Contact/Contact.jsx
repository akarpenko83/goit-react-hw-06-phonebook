import PropTypes from 'prop-types';
import { DeleteButton } from './Contact.styled';

export default function Contact({
  name,
  number,
  onDelete,
}) {
  return (
    <>
      {name}: {number}
      <DeleteButton onClick={onDelete} type="button">
        Delete
      </DeleteButton>
    </>
  );
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

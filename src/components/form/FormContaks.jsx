import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { nanoid } from 'nanoid';
import { FormLabel, FormInput, StyledForm } from './FormContaks.styled';

export const FormContaks = ({ addContact }) => {
  const schema = object({
    name: string().required(),
    number: string().required(),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const contact = { id: nanoid(), ...values };
    addContact(contact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <FormLabel htmlFor="">
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel htmlFor="">
          Phone
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <button type="submit" className="button">
          Add contact
        </button>
      </StyledForm>
    </Formik>
  );
};

FormContaks.propTypes = {
  addContact: PropTypes.func.isRequired,
};

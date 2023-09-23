import { Formik } from 'formik';
import {
  StyledForm,
  StyledField,
  StyledError,
  AddBtn,
} from './ContactsForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const schema = Yup.object().shape({
  name: Yup.string().required(
    '*The field cannot be empty!Please enter the name'
  ),
  number: Yup.string().required(
    '*The field cannot be empty!Please enter the number'
  ),
});

export const ContactsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    if (contacts.find(contact => contact.name === values.name)) {
      return alert(`Contact ${values.name} is already in contacts`);
    }
    dispatch(addContact({ id: nanoid(), ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <StyledForm>
        <label>Name</label>
        <StyledField id="name" name="name" placeholder="Enter name" />
        <StyledError name="name" component="div" />
        <label>Number</label>
        <StyledField
          id="number"
          name="number"
          placeholder="Enter phone number"
        />
        <StyledError name="number" component="div" />
        <AddBtn type="submit">Add contact</AddBtn>
      </StyledForm>
    </Formik>
  );
};

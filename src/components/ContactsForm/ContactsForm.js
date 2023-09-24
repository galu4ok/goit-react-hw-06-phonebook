import { Field, Formik } from 'formik';
import {
  StyledForm,
  StyledField,
  StyledError,
  AddBtn,
} from './ContactsForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { PatternFormat } from 'react-number-format';
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
      <StyledForm autoComplete="off">
        <label>Name</label>
        <Field
          as={StyledField}
          name="name"
          placeholder="Enter name"
          style={{ width: '440px' }}
        />
        <StyledError name="name" component="div" />
        <label>Number</label>
        <Field
          as={PatternFormat}
          customInput={StyledField}
          name="number"
          placeholder="Enter number"
          variant="standard"
          style={{ width: '440px' }}
          format="###-##-##"
          allowEmptyFormatting={true}
          mask="#"
        />
        <StyledError name="number" component="div" />
        <AddBtn type="submit">Add contact</AddBtn>
      </StyledForm>
    </Formik>
  );
};

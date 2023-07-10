import * as Yup from 'yup';
export const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().required('Champ obligatoire'),
  phone: Yup.string().required('Champ obligatoire'),
});
export const INITIAL_FORM_STATE = {
  email: '',
  phone: '',
  firstName: '',
  lastName: '',
};

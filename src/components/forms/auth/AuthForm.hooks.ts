import * as Yup from 'yup';
export const FORM_VALIDATION = Yup.object().shape({
  login: Yup.string().required('Champ obligatoire'),
  password: Yup.string().required('Champ obligatoire'),
});
export const INITIAL_FORM_STATE = {
  login: '',
  password: '',
};

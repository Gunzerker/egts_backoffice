import moment from 'moment';
import IInterventionData from 'src/const/intervention.type';
import * as yup from 'yup';
const { v4: uuidv4 } = require('uuid');

export const FORM_VALIDATION = yup.object().shape({
  title: yup.string().required('Champs obligatoire '),
  start_time: yup.date().required('Champs obligatoire '),
  end_time: yup.date().required('Champs obligatoire '),
});

export const initialValues: IInterventionData = {
  id: Math.random(),
  group: 0,
  title: '',
  start_time: moment(),
  end_time: moment(),
};

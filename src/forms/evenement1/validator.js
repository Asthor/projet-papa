import * as yup from 'yup';

export const schema = yup
  .object({
    firstName: yup.string().required('Le Nom est requis'),
    lastname: yup.string().required('Le Prénom est requis'),
  })
  .required();

export const optionsFruits = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'raspberry', label: 'Raspberry' },
];

export const defaultValues = {
  firstName: '',
  lastname: '',
  select: {},
  checkbox: false,
};

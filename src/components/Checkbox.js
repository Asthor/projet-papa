import React from 'react';
import { Controller } from 'react-hook-form';
import Checkbox from '@material-ui/core/Checkbox';

export default function Input({ control, name, errors }) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Checkbox {...field} />}
      />
      <p>{errors[name]?.message}</p>
    </>
  );
}

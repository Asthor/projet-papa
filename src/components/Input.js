import React from 'react';
import { Controller } from 'react-hook-form';
import Input from '@material-ui/core/Input';

export default function Input({ control, name, errors }) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <p>{errors[name]?.message}</p>
    </>
  );
}

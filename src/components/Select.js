import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

export default function Select({ control, name, errors, options }) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
          />
        )}
      />
      <p>{errors[name]?.message}</p>
    </>
  );
}

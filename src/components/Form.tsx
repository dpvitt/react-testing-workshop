import React, { FC, useState } from 'react';

interface FormProps {
    onClick(field: string): void;
} 

export const Form: FC<FormProps> = ({ onClick }) => {
  const [field, setField] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setField(event.target.value);
  };
  const handleClick = () => {
    onClick(field);
  }

  return (
    <form data-testId="my-form">
        <label htmlFor="my-input">My form field</label>
        <input id="my-input" type="text" onChange={onChange} value={field} />
        <button onClick={handleClick}>my form button</button>
    </form>
  );
}

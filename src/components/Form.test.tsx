import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

describe('Form Component', () => {
  it('renders the form tag', () => {
    render(<Form onClick={() => {}} />);
    // find the form by test ID
  });

  it('renders the field and label', () => {
    // mock the onClick function
    render(<Form onClick={() => {}} />);
    const field = screen.getByLabelText('My form field');
    const button = screen.getByRole('button');
    userEvent.type(field, "my field value")
    // click the button 
    // check the button is called with the latest typed value
  });
});

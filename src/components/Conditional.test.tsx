import React from 'react';
import { render, screen } from '@testing-library/react';
import { Conditional } from './Conditional';

describe('Conditional Component', () => {
  it('renders the failure message by default', () => {
    render(<Conditional />);
    const text = screen.getByText('Things are looking OK!');
    expect(text).toBeInTheDocument();
  });

  it('renders the failure message if we pass false for the condition', () => {
    render(<Conditional />);
    // add a test for explicitly passing false as the condition prop'
  });

  it('renders the success message if we pass true for the condition', () => {
    render(<Conditional />);
    // add a test for explicitly passing true as the condition prop
  });

  it('renders the truthy text if we pass true for the condition', () => {
    render(<Conditional />);
    // add a test checking "TRUTHY" is present
  });

  it('does not render the truthy text if we pass false for the condition', () => {
    render(<Conditional />);
    // add a test checking "TRUTHY" is not present
  });
});

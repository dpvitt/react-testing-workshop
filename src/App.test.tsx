import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

describe('App Component', () => {

  it('renders the Conditional component', () => {
    render(<App />);
    const text = screen.getByText('Things are looking OK!');
    expect(text).toBeInTheDocument();
  });

  it('renders the link', () => {
    render(<App />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
  });

  it('renders the link path with the correct url', () => {
    render(<App />);
    const linkElement = screen.getByRole('link');
    expect(linkElement.getAttribute('href')).toEqual('https://reactjs.org/docs/react-api.html');
  });

  it('renders the link path with a different url', () => {
    render(<App />);
    // add a test that modifies the link path
  });

  it('renders the image with the correct src', () => {
    render(<App />);
    const linkElement = screen.getByAltText('logo');
    // add a test to check the logo has the correct src attribute
  });

  // Come back to this test after completing 2/3 tests in Button.test.tsx 
  it('calls the window.myCall function with the correct properties', () => {
    window.myCall = jest.fn();
    render(<App />);
    // use toHaveBeenCalledWith after clicking on the button
  });

  // If you complete this, try the test in Form.test.tsx
});

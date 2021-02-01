import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
// import * as Third from "../utils/thirdPartyCall";

describe('Button Component', () => {
  it('renders the supplied button label', () => {
    render(<Button onClick={() => {}} label="test button" name="Janet" />);
    const button = screen.getByText('test button');
    // fix this test
    expect(button).toBeInTheDocument();
  });

  describe('onClick', () => {
    it('calls the onClick function event with the supplied name', () => {
        // pass a mock function to onClick
        render(<Button onClick={() => {}} label="test button" name="Janet" />);
        const button = screen.getByRole('button');
        userEvent.click(button);
        // use toHaveBeenCalledWith to get this test to pass
    });

    // Come back to this test after completing all the tests in App.test.tsx
    it('calls the thirdPartyCall function with the supplied label', () => {
        // add a spy for the thirdPartyCall import
        render(<Button onClick={() => {}} label="test button" name="Janet" />);
        // use spy.mock.calls to get this test to pass
    });

    // Come back to this test after completing all the tests in App.test.tsx
    it('the thirdPartyCall function returns with the altered copy', () => {
        // add a spy for the thirdPartyCall import
        render(<Button onClick={() => {}} label="test button" name="Janet" />);
        // use spy.mock.results to get this test to pass
    });
  });

});

import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async() => {
     render(<CheckoutForm />);
     // set test inputs
     const testFirstName = 'testFirstName';
     const testLastName = 'testLastName';
     const testAddress = 'testAddress';
     const testCity = 'testCity';
     const testState = 'testState';
     const testZip = 'testZip';
     // get elements
     const firstName = await screen.getByLabelText(/First Name:/i);
     const lastName = await screen.getByLabelText(/Last Name:/i);
     const address = await screen.getByLabelText(/Address:/i);
     const city = await screen.getByLabelText(/City:/i);
     const state = await screen.getByLabelText(/State:/i);
     const zip = await screen.getByLabelText(/Zip:/i);
     // type test inputs
     userEvent.type(firstName, testFirstName);
     userEvent.type(lastName, testLastName);
     userEvent.type(address, testAddress);
     userEvent.type(city, testCity);
     userEvent.type(state, testState);
     userEvent.type(zip, testZip);
     // get and click checkout button
     const button = await screen.getByRole('button');
     userEvent.click(button);
     // find expected elements
     const successMessage = await screen.getByTestId('successMessage');
     expect(successMessage).toBeInTheDocument();
});

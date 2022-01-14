import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';


// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);

});

test("shows success message on submit with form details", async () => {

    render (<CheckoutForm/>);

    const fNameInput = screen.queryByLabelText(/First Name:/i)
    userEvent.type(fNameInput, 'Mark');
    const lNameInput = screen.queryByLabelText(/Last Name:/i)
    userEvent.type(lNameInput,'Marks');
    const addressInput = screen.queryByLabelText(/Address:/i)
    userEvent.type(addressInput, '214 Parkway Dr.');
    const cityInput = screen.queryByLabelText(/City:/i)
    userEvent.type(cityInput, 'Wickliffe');
    const stateInput = screen.queryByLabelText(/State:/)
    userEvent.type(stateInput, 'Florida');
    const zipInput = screen.queryByLabelText(/Zip:/i)
    userEvent.type(zipInput, '55057');

    const checkoutButton = screen.getByRole('button');
    userEvent.click(checkoutButton);

    const successMessage = await screen.findByTestId('successMessage');
    expect(successMessage).toBeInTheDocument();
});

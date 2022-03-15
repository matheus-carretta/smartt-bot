import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal';
import ModalContext from '../context/ModalContext';
import '@testing-library/jest-dom/extend-expect';

describe('Modal component', () => {
  it('input and buttons works', () => {
    const { getByTestId } = render(
      <ModalContext.Provider value="mock">
        <Modal />
      </ModalContext.Provider>,
    );

    const addTitle = getByTestId('add-title');
    expect(addTitle).toBeTruthy();

    const confirmBtn = getByTestId('confirm-btn');
    expect(confirmBtn).toBeTruthy();

    const valueInput = getByTestId('value-input');
    expect(valueInput).toBeTruthy();

    const nameInput = getByTestId('name-input');
    expect(nameInput).toBeTruthy();

    expect(confirmBtn).toHaveAttribute('disabled');

    const inputWord = 'ROBOT';
    fireEvent.change(nameInput, { target: { value: inputWord } });
    expect(confirmBtn).toHaveAttribute('disabled');

    const inputNumber = '5000';
    fireEvent.change(valueInput, { target: { value: inputNumber } });
    expect(confirmBtn).not.toHaveAttribute('disabled');
  });
});

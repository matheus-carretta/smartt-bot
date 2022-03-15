import React from 'react';
import { render } from '@testing-library/react';
import MovimentsContext from '../context/MovimentsContext';
import MovimentationsSections from '../components/MovimentationsSections';
import { mockMoviments } from './mocks';

describe('Transactions component', () => {
  it('render the correct texts and titles', () => {
    const { getByTestId } = render(
      <MovimentsContext.Provider value={mockMoviments}>
        <MovimentationsSections />
      </MovimentsContext.Provider>,
    );
    const headerText = getByTestId('summary-transactions-title');
    expect(headerText).toBeTruthy();

    const transactionsTitle = getByTestId('transictions-title');
    expect(transactionsTitle).toBeTruthy();

    const totalTransactionsTitle = getByTestId('total-transictions-title');
    expect(totalTransactionsTitle).toBeTruthy();

    const totalTransictionsValue = getByTestId('total-value');
    expect(totalTransictionsValue.innerHTML).toBe('R$0,00');

    const totalTransictions = getByTestId('total-transactions');
    expect(totalTransictions.innerHTML).toBe('1000');
  });
});

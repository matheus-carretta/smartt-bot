import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header component', () => {
  it('render header text', () => {
    const { getByTestId } = render(<Header />);
    const headerText = getByTestId('header-text');
    expect(headerText).toBeTruthy();
  });

  it('render actual page text', () => {
    const { getByTestId } = render(<Header />);
    const headerActualPage = getByTestId('header-actual-page');
    expect(headerActualPage).toBeTruthy();
  });

  it('render a grafic icon', () => {
    const { getByTestId } = render(<Header />);
    const graficIcon = getByTestId('grafic-icon');
    expect(graficIcon).toBeTruthy();
  });
});

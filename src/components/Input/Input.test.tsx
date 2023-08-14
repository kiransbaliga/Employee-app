import Input, { InputProp } from './Input';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('if input is working properly', () => {
  test('if input is correctly rendered', () => {
    const inputprops: InputProp = {
      value: 'hi',
      label: 'input',
      type: 'text'
    };

    render(<Input {...inputprops} />);
    const elem = screen.getByTestId('input-test');

    if (elem) expect(elem.getAttribute('value')).toBe('hi');
  });
  test('if input is correctly rendered', () => {
    const inputprops: InputProp = {
      value: 'hi',
      label: 'input',
      type: 'text'
    };

    render(<Input {...inputprops} />);
    const elem = screen.getByTestId('input-test');

    if (elem) expect(elem.getAttribute('type')).toBe('text');
  });
});

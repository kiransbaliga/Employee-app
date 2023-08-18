import { render, screen } from '@testing-library/react';
import Status from './Status';

describe('to check if status is rendered properly', () => {
  test('if status is active', () => {
    const props = {
      isActive: 'true'
    };

    render(<Status {...props} />);
    const elem = screen.getByTestId('status-tests');

    if (elem) expect(elem.innerHTML).toBe('Active');
  });

  test('if status is inactive', () => {
    const props = {
      isActive: 'false'
    };

    render(<Status {...props} />);
    const elem = screen.getByTestId('status-tests');

    if (elem) expect(elem.innerHTML).toBe('Inactive');
  });
});

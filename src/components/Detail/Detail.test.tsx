import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Detail from './Detail';

describe('if details is working properly', () => {
  test('if rendering properly', () => {
    const Detailprops = {
      label: 'data',
      val: 'dataval',
      type: 'text'
    };

    render(<Detail {...Detailprops} />);
    const elem = screen.getByTestId('detail-test');

    if (elem) expect(elem.innerHTML).toBe('data');
  });
  test('if rendering properly', () => {
    const Detailprops = {
      label: 'data',
      val: 'dataval',
      type: 'text'
    };

    render(<Detail {...Detailprops} />);
    const elem = screen.getByTestId('text-test');

    if (elem) expect(elem.innerHTML).toBe('dataval');
  });
});

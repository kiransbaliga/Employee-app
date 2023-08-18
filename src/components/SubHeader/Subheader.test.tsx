import { render, screen } from '@testing-library/react';
import Subheader, { SubHeaderProps } from './Subheader';
import '@testing-library/jest-dom';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});
describe('if subheader is rendered properly', () => {
  test('if label is rendered', () => {
    const subheaderprops: SubHeaderProps = {
      label: 'data',
      type: 'edit',
      id: null
    };

    render(<Subheader {...subheaderprops} />);
    const elem = screen.getByTestId('label-test');

    if (elem) expect(elem.innerHTML).toBe('data');
  });
});

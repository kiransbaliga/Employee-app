import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});
describe('If Sidebar is workign fine', () => {
  test('if image is being rendered properly', () => {
    render(<Sidebar />);

    const elem = screen.getByTestId('logo-test');

    if (elem) expect(elem.getAttribute('alt')).toBe('Keyvalue Logo');
  });
});

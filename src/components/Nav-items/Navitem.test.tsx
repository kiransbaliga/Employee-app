import { render } from '@testing-library/react';
import * as router from 'react-router';
import { Navitem } from './Navitem';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

describe('to test if Navitem is rendered properly', () => {
  test('if  nav item is rendered properly', () => {
    const props = {
      src: './emp.jpg',
      text: 'Employee details'
    };

    render(<Navitem {...props} />);
  });
});

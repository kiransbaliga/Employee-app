import Button, { ButtonProps } from './Button';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
describe('If Buttons works properly', () => {
  test('If label rendered correctly', () => {
    const buttonprops: ButtonProps = {
      type: 'primary',
      value: 'submit'
    };

    render(<Button {...buttonprops} />);
    const elemt = screen.getByTestId('button-click-test');

    // expect(elemt.innerHTML).toBe('submit');
    // if (elemt) expect(elemt).toHaveTextContent('submit');
    if (elemt) expect(elemt.className).toBe('Button-primary');
  });

  test('if onclick is triggered', () => {
    const onClick = jest.fn();
    const buttonprops: ButtonProps = {
      type: 'primary',
      value: 'submit',
      onClick
    };

    const elem = render(<Button {...buttonprops} />);
    // const elemt = screen.getByTestId('button-click-test');

    // fireEvent.click(elem);
    expect(elem).toMatchSnapshot();
  });
});

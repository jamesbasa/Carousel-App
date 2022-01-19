import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';

test('renders learn react link', () => {
  render(<Carousel />);
  const linkElement = screen.getByText(/Carousel App/i);
  expect(linkElement).toBeInTheDocument();
});

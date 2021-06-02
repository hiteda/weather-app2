import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders landing page', () => {
  render(<App />);
  const descriptionElement = screen.getByText(/Compare the forecasts of multiple cities side-by-side./i);
  expect(descriptionElement).toBeInTheDocument();
});

import React from 'react';
import Results from '../components/results/results.js';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';

it('should render a list of star wars char', async () => {
  const raw = await fetch ('https://swapi.dev/api/people/');
  let data = await raw.json();
  let people = data.results;
  let results = Object.entries(people);

  render(<Results src={results} />);

  expect(results).toBeTruthy();
});
import React from 'react';
import ReactDOM from 'react-dom';
import ViewGrid from './ViewGrid';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewGrid />, div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import SearchBar from '../layout/SearchBar';

it('SearchBar Component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
});

it('SearchBar Component renders correctly and equal to snapshot', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
  
    expect(tree).toMatchSnapshot();
});
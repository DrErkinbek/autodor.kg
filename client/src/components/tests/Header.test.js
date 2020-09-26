import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from '../layout/Header';

it('Header Component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
});

it('Header Component renders correctly and equal to snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
  
    expect(tree).toMatchSnapshot();
});
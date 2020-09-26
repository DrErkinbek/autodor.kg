import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Error from '../layout/404';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Error />, div);
});

it('renders correctly and equal to snapshot', () => {
    const tree = renderer.create(<Error />).toJSON();
  
    expect(tree).toMatchSnapshot();
});
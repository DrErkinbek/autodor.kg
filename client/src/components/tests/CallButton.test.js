import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CallButton from '../layout/CallButton';

it('CallButton renders without crashing ', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CallButton />, div);
});

it('renders correctly and equal to snapshot', () => {
    const tree = renderer.create(<CallButton />).toJSON();
  
    expect(tree).toMatchSnapshot();
})
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Static from '../layout/Static';

it('Static component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Static />, div);
});

it('Static renders correctly and equal to snapshot', () => {
    const tree = renderer.create(<Static />).toJSON();
  
    expect(tree).toMatchSnapshot();
});

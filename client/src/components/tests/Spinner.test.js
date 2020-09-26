import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Spinner from '../layout/Spinner';

it('Spinner Component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Spinner />, div);
});

it('Spinner Component renders correctly and equal to snapshot', () => {
    const tree = renderer.create(<Spinner />).toJSON();
  
    expect(tree).toMatchSnapshot();
});
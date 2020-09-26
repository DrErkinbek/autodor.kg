import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import BrandAccumulators from '../layout/BrandAccumulators';

it('BrandAccumulators Component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrandAccumulators />, div);
});

it('BrandAccumulators Component renders correctly and equal to snapshot', () => {
    const tree = renderer.create(<BrandAccumulators />).toJSON();
  
    expect(tree).toMatchSnapshot();
});
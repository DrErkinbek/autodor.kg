import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import CallBtnModal from '../form/CallBtnModal';

it('CallBtnModal renders without crashing ', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CallBtnModal />, div);
});

it('CallBtnModal renders correctly and equal to snapshot', () => {
    const tree = renderer.create(<CallBtnModal />).toJSON();
  
    expect(tree).toMatchSnapshot();
});
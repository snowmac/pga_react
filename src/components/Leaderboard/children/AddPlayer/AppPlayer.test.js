import React from 'react';
import { shallow } from 'enzyme';
import AddPlayer from './index';

describe('AddPlayer Tests', () => {

  it('ensuring my on change method gets called', () => {
    const spy = jest.fn();
    const form = shallow(<AddPlayer formSubmit={spy} />);

    expect(spy).not.toBeCalled();

    form.find('input').simulate('change');

    expect(spy).toBeCalled();
  });

  it('ensures that the add player button fails when there is not data', () => {
  });

  it('ensures that the add player button works nicely', () => {
  });
});

// vendors
import React from 'react';
// project
import Profile from 'components/profile';

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('component Profile', () => {
  it('have text with default name', () => {
    const output = shallow(<Profile />);
    expect(output.contains(<h1>unnamed</h1>)).to.equal(true);
  });

  it('have text with name', () => {
    const output = shallow(<Profile name="Pedro" />);
    expect(output.contains(<h1>Pedro</h1>)).to.equal(true);
  });
});

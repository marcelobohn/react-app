// vendors
import React from 'react';
// project
import Welcome from 'components/welcome';

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('component Welcome', () => {
  it('have text', () => {
    const output = shallow(<Welcome />);
    expect(output.contains(<h1>Bem vindo!</h1>)).to.equal(true);
  });
});

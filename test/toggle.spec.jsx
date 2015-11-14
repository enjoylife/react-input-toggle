import './testdom.js';

import React from 'react';
import {findDOMNode} from 'react-dom';
import should from 'should';
import TestUtils from 'react-addons-test-utils';

import FancySwitch from '../lib/components/FancySwitch';

describe("FancySwitch", () => {
  let label = 'my test label';
  var dom,
    component;
  beforeEach(function () {

    component = TestUtils.renderIntoDocument(
      <FancySwitch label={label}/>
    );
    dom = findDOMNode(component);
  });

  it("respects a defaultChecked prop", () => {
    let unChecked = TestUtils.renderIntoDocument(
      <FancySwitch defaultChecked={false}/>
    );
    should(unChecked.state.fiChecked).be.a.Boolean();
    should(unChecked.state.fiChecked).be.false();
    let checked = TestUtils.renderIntoDocument(
      <FancySwitch defaultChecked={true}/>
    );
    should(checked.state.fiChecked).be.a.Boolean();
    should(checked.state.fiChecked).be.true();
  });

  it("modifies the css classes per the effectName prop", () => {
    let sierra = TestUtils.renderIntoDocument(
      <FancySwitch effectName={'sierra'}/>
    );

    let dom = findDOMNode(sierra);
    let switchClasses = dom.classList;
    should(switchClasses).matchAny(/sierra/);

  });
  xit("adds a css class corrasponding to the labelPostion prop", () => {});
  xit("still calls overriden event handlers passed in by prop", () => {});

  xit("allows for calling arrbitray event handlers", () => {});

  xit("allows for passing aribitrary props down to the input", () => {});
  xit("gives a unique id and for attribute to the input and label", () => {});
  xit('applies aria attributes to its children when needed', () => {});
  xit("gives its underlying input focus when the component is toggled", () => {});

});

/*prettydiff.com langdefault: "jsx", methodchain: true, mode: "beautify"*/

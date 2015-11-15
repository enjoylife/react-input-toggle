import './testdom.js';

import React from 'react';
import {
  findDOMNode
} from 'react-dom';

import sinon from 'sinon';
import should from 'should';
import 'should-sinon';

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
  it("adds a css class corrasponding to the labelPostion prop", () => {
    let upLabel = TestUtils.renderIntoDocument(
      <FancySwitch labelPostion={'top'}/>
    );
    let dom = findDOMNode(upLabel);
    let switchClasses = dom.classList;
    should(switchClasses).matchAny(/top/);
  });
  it("still calls overriden event handlers passed in by prop", () => {

    var spyChange = sinon.spy();
    var spyBlur = sinon.spy();
    var spyFocus = sinon.spy();

    const toggle = TestUtils.renderIntoDocument(
      <FancySwitch onChange={spyChange} onFocus={spyFocus} onBlur={spyBlur}/>
    );

    let dom = findDOMNode(toggle);
    TestUtils.Simulate.change(toggle._input);
    spyChange.should.be.called();

    TestUtils.Simulate.focus(toggle._input);
    spyFocus.should.be.called();

    TestUtils.Simulate.blur(toggle._input);
    spyFocus.should.be.called();
  });

  it("allows for calling arrbitray event handlers", () => {

    var spyChange = sinon.spy();
    var spyKeyDown = sinon.spy();
    const toggle = TestUtils.renderIntoDocument(
      <FancySwitch onChangeCapture={spyChange} onKeyDown={spyKeyDown}/>
    );

    let dom = findDOMNode(toggle);
    TestUtils.Simulate.change(toggle._input);
    spyChange.should.be.called();
    TestUtils.Simulate.keyDown(toggle._input);
    spyKeyDown.should.be.called();

  });

  it("allows for passing aribitrary props down to the input", () => {
    const toggle = TestUtils.renderIntoDocument(
      <FancySwitch autoFocus/>
    );
    const input = TestUtils.findRenderedDOMComponentWithTag(toggle, 'input');
    // console.log(findDOMNode(input).getAttribute('autoFocus'));
    should(input).be.equal(document.activeElement)
  });
  it("gives its underlying input focus when the component is toggled", () => {
    const toggle = TestUtils.renderIntoDocument(
      <FancySwitch/>
    );
    let dom = findDOMNode(toggle);
    TestUtils.Simulate.click(dom);
    // should(toggle._input).be.equal(document.activeElement);
  });
  it("gives a unique id and for attribute to the input and label", () => {
    const toggle = TestUtils.renderIntoDocument(
      <FancySwitch/>
    );
    const toggle2 = TestUtils.renderIntoDocument(
      <FancySwitch/>
    );
    should(toggle._input.id).not.equal(toggle2._input.id)
  });

});

/*prettydiff.com langdefault: "jsx", methodchain: true, mode: "beautify"*/

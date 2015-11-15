import React from 'react';
import {
  findDOMNode,
  unmountComponentAtNode,
  render
} from 'react-dom';

// var chai = require('chai');
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

var expect = chai.expect;

import TestUtils from 'react-addons-test-utils';

import FancySwitch from '../FancySwitch';

describe("FancySwitch", () => {
  let label = 'my test label';
  var dom,
    component;

  var div = document.createElement("div");
  document.body.appendChild(div);

  beforeEach(() => {});

  afterEach(() => {
    unmountComponentAtNode(div);
  });

  it("respects a defaultChecked prop", () => {
    let unChecked = TestUtils.renderIntoDocument(
      <FancySwitch defaultChecked={false}/>
    );
    expect(unChecked.state.fiChecked).to.be.false;

    let checked = TestUtils.renderIntoDocument(
      <FancySwitch defaultChecked={true}/>
    );

    expect(checked.state.fiChecked).to.be.true;
  });

  it("modifies the css classes per the effectName prop", () => {
    let sierra = TestUtils.renderIntoDocument(
      <FancySwitch effectName={'sierra'}/>
    );

    let dom = findDOMNode(sierra);
    expect(dom.className).to.match(/sierra/);

  });
  it("adds a css class corrasponding to the labelPostion prop", () => {
    let upLabel = TestUtils.renderIntoDocument(
      <FancySwitch labelPostion={'top'}/>
    );
    let dom = findDOMNode(upLabel);
    let switchClasses = dom.classList;
    expect(dom.className).match(/top/);
  });
  it("still calls overriden event handlers passed in by prop", () => {

    var spyChange = chai.spy(() => {});
    var spyBlur = chai.spy(() => {});
    var spyFocus = chai.spy(() => {});

    const toggle = TestUtils.renderIntoDocument(
      <FancySwitch onChange={spyChange} onFocus={spyFocus} onBlur={spyBlur}/>
    );

    let dom = findDOMNode(toggle);
    TestUtils.Simulate.change(toggle._input);
    expect(spyChange).to.have.been.called();

    TestUtils.Simulate.focus(toggle._input);
    expect(spyFocus).to.have.been.called();

    TestUtils.Simulate.blur(toggle._input);
    expect(spyFocus).to.have.been.called();
  });

  it("allows for calling arrbitray event handlers", () => {

    var spyChange = chai.spy(() => {});
    var spyKeyDown = chai.spy(() => {});
    const toggle = TestUtils.renderIntoDocument(
      <FancySwitch onChangeCapture={spyChange} onKeyDown={spyKeyDown}/>
    );

    let dom = findDOMNode(toggle);
    TestUtils.Simulate.change(toggle._input);
    expect(spyChange).to.have.been.called();
    TestUtils.Simulate.keyDown(toggle._input);
    expect(spyKeyDown).to.have.been.called();
  });

  it("allows for passing aribitrary props down to the input", () => {
    const toggle = render(
      <FancySwitch autoFocus data-fake={'test'}/>, div);
    expect(document.activeElement).to.equal(toggle._input);
    expect(toggle._input.dataset.fake).to.equal('test');
  });

  it("gives its underlying input focus when the component is toggled", () => {
    const toggle = render(
      <FancySwitch/>, div);
    let dom = findDOMNode(toggle);
    TestUtils.Simulate.click(dom);
    dom.click();
    expect(toggle._input).to.equal(document.activeElement);
  });

  it("gives a unique id and for attribute to the input and label", () => {
    const toggle = TestUtils.renderIntoDocument(
      <FancySwitch/>
    );
    const toggle2 = TestUtils.renderIntoDocument(
      <FancySwitch/>
    );
    expect(toggle._input.id).to.not.equal(toggle2._input.id)
  });

});

/*prettydiff.com langdefault: "jsx", methodchain: true, mode: "beautify"*/

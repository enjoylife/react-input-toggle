import React from 'react';
import {findDOMNode, unmountComponentAtNode, render} from 'react-dom';

import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

var expect = chai.expect;

import TestUtils from 'react-addons-test-utils';

import Toggle from '../components/Toggle';
import effects from '../components/effects';

describe("Toggle", () => {
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
      <Toggle defaultChecked={false}/>
    );
    expect(unChecked._input.checked).to.be.false;
    let checked = TestUtils.renderIntoDocument(
      <Toggle defaultChecked={true}/>
    );

    expect(checked._input.checked).to.be.true;
  });

  it("modifies the css classes per the effect prop", () => {
    const effectsList = Object.keys(effects);
    for (var i = 0; i < effectsList.length; i++) {
      let effect = effectsList[i];
      let component = TestUtils.renderIntoDocument(
        <Toggle effect={effect}/>
      );
      let dom = findDOMNode(component);
      expect(dom.className).to.have.string(effect);
    }

  });
  it("adds a css class corrasponding to the labelPosition prop", () => {
    let upLabel = TestUtils.renderIntoDocument(
      <Toggle labelPosition={'top'}/>
    );
    let dom = findDOMNode(upLabel);
    let switchClasses = dom.classList;
    expect(dom.className).match(/top/);
  });

  it("adds a css class if a disabled prop is passed in", () => {
    let input = TestUtils.renderIntoDocument(
      <Toggle disabled/>
    );
    let dom = findDOMNode(input);
    let switchClasses = dom.classList;
    expect(dom.className).match(/disabled/);
  });

  it("still calls overriden event handlers passed in by prop", () => {

    var spyChange = chai.spy(() => {});
    var spyBlur = chai.spy(() => {});
    var spyFocus = chai.spy(() => {});

    const toggle = TestUtils.renderIntoDocument(
      <Toggle onChange={spyChange} onFocus={spyFocus} onBlur={spyBlur}/>
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
      <Toggle onChangeCapture={spyChange} onKeyDown={spyKeyDown}/>
    );

    let dom = findDOMNode(toggle);
    TestUtils.Simulate.change(toggle._input);
    expect(spyChange).to.have.been.called();
    TestUtils.Simulate.keyDown(toggle._input);
    expect(spyKeyDown).to.have.been.called();
  });

  it("allows for passing aribitrary props down to the input", () => {
    const toggle = render(
      <Toggle autoFocus data-fake={'test'}/>, div);
    expect(document.activeElement).to.equal(toggle._input);
    expect(toggle._input.dataset.fake).to.equal('test');
  });

  it("gives its underlying input focus when the component is toggled", () => {
    const toggle = render(
      <Toggle/>, div);
    let dom = findDOMNode(toggle);
    TestUtils.Simulate.click(dom);
    dom.click();
    expect(toggle._input).to.equal(document.activeElement);
  });

  it('stops default browser behavior of switching focus when mouseDown on label', () => {
    const toggle = render(
      <Toggle autoFocus data-fake={'test'}/>, div);

    let dom = findDOMNode(toggle);
    TestUtils.Simulate.mouseDown(dom);
    expect(toggle._input).to.equal(document.activeElement);
  });

  it("gives a unique id and for attribute to the input and label", () => {
    const toggle = TestUtils.renderIntoDocument(
      <Toggle/>
    );
    const toggle2 = TestUtils.renderIntoDocument(
      <Toggle/>
    );
    expect(toggle._input.id).to.not.equal(toggle2._input.id)
  });

});

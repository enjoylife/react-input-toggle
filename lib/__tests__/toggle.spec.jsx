/* setup.js */

import React from 'react';
import {findDOMNode, unmountComponentAtNode, render} from 'react-dom';

import { shallow, mount } from 'enzyme';

import Toggle from '../components/Toggle';
import effects from '../components/effects';

describe("Toggle", () => {

  it("respects a defaultChecked prop", () => {
    let unChecked = shallow(
      <Toggle defaultChecked={false}/>
    );
    expect(unChecked.state('fiChecked')).toBeFalsy();

    let checked = shallow(
      <Toggle defaultChecked={true}/>
    );
    expect(checked.state('fiChecked')).toBeTruthy();
  });

  it("modifies the css classes per the effect prop", () => {
    const effectsList = Object.keys(effects);
    for (let i = 0; i < effectsList.length; i++) {
      let effect = effectsList[i];
      let component = shallow(
        <Toggle effect={effect}/>
      );
      expect(component.node.props.className)
        .toEqual(expect.stringContaining(effect));
    }
  });

  it("adds a css class corresponding to the labelPosition prop", () => {
    let upLabel = shallow(
      <Toggle labelPosition={'top'}/>
    );
    expect(upLabel.node.props.className)
      .toEqual(expect.stringMatching(/top/));
  });

  it("adds a css class if a disabled prop is passed in", () => {
    let disabled = shallow(
      <Toggle disabled/>
    );
    expect(disabled.node.props.className)
      .toEqual(expect.stringMatching(/disabled/));
  });

  it("calls overridden event handlers passed in by prop", () => {

    let spyChange = jest.fn();
    let spyBlur = jest.fn();
    let spyFocus = jest.fn();

    const toggle = mount(
      <Toggle onChange={spyChange} onFocus={spyFocus} onBlur={spyBlur}/>
    );

    const input = toggle.find('input');

    input.simulate('change');
    expect(spyChange).toHaveBeenCalled();

    input.simulate('focus');
    expect(spyFocus).toHaveBeenCalled();

    input.simulate('blur');
    expect(spyBlur).toHaveBeenCalled();

  });

  it("allows for calling arbitrary event handlers", () => {

    let spyChange = jest.fn();
    let spyKeyDown = jest.fn();
    const toggle = mount(
      <Toggle onChangeCapture={spyChange} onKeyDown={spyKeyDown}/>
    );

    const input = toggle.find('input');

    // ReactTestUtils.Simulate.change(toggle);
    input.simulate('change');
    expect(spyChange).toHaveBeenCalled();

    // ReactTestUtils.Simulate.change(toggle);
    input.simulate('keyDown');
    expect(spyKeyDown).toHaveBeenCalled();

  });

  it("allows for passing arbitrary props down to the input", () => {
   const toggle = mount(
      <Toggle autoFocus data-fake={'test'}/>);

    const input = toggle.find('input');
    expect(input.props()).toHaveProperty('autoFocus');
    expect(input.props()).toMatchObject({
      'autoFocus': true,
      'data-fake': 'test'
    });
  });

});

describe('Toggle Rendering', () => {
  var dom,
    component;
  var div = document.createElement("div");
  var div2 = document.createElement("div2");
  document.body.appendChild(div);
  document.body.appendChild(div2);
  beforeEach(() => {});

  afterEach(() => {
    unmountComponentAtNode(div);
    unmountComponentAtNode(div2);
  });
  it("gives its underlying input focus when the component is toggled", () => {
    const toggle = render(
      <Toggle/>, div);
    let dom = findDOMNode(toggle);
    dom.click();
    expect(toggle._input).toBe(document.activeElement);
  });

  it("gives a unique id and for attribute to the input and label", () => {
    const toggle = render(
      <Toggle/> ,div
    );
    const toggle2 = render(
      <Toggle/>   ,div2
    );
    expect(toggle._input.id).not.toBe(toggle2._input.id)
  });

});
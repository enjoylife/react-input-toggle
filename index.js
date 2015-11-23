import React from 'react';
import {render} from 'react-dom';

import Toggle from 'lib/index';
import 'lib/styles/switch.scss';

import effects from 'lib/components/effects';
import cs from 'classnames';

const darkBackgroundEffects = ['foxtrot', 'skeleton'];
// var a11y = require('react-a11y');
// a11y(React);

class Example extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      effect: 'lima',
      labelPosition: 'bottom',
      label: 'lima',
      fontSize: null
    };
  }

  updateEffect = (e) => {
    console.log(e);
    this.setState({effect: e.target.value, label: e.target.value});
  }

  updateLabel = (e) => {
    this.setState({label: e.target.value});
  }

  updatePosition = (pos) => {
    return() => {
      this.setState({labelPosition: pos});
    }
  }

  updateFontSize = (e) => {
    this.setState({fontSize: e.target.value});
  }

  componentDidMount () {}

  renderCodeString = () => {
    const {
      effect,
      labelPosition,
      label
    } = this.state;

    const es = 'effect="' + effect + '"';
    const lps = 'labelPosition="' + labelPosition + '"';
    const ls = 'label="' + label + '"';

    return '<Toggle  ' + es + '  ' + lps + '   ' + ls + '  />';

  }

  render () {
    const {
      effect,
      labelPosition,
      label,
      fontSize
    } = this.state;

    const options = Object.keys(effects).map((effect, i) => {
      return <option value={effect} key={i}>{effect}</option>
    });

    const propString = JSON.stringify(this.state, null, 2);

    const codeString = this.renderCodeString();

    const isDark = (darkBackgroundEffects.indexOf(effect)) > -1
      ? true
      : false;

    const playCSS = cs('playground', [isDark && 'playground--dark']);
    const playStyle = {
      'fontSize': (fontSize == null)
        ? null
        : (fontSize + 'em')
    }
    return (
      <div>

        <div className="playground-wrapper" style={playStyle}>
          <div className={playCSS}>
            <Toggle effect={effect} labelPosition={labelPosition}/>
            <Toggle label={label} effect={effect} labelPosition={labelPosition} defaultChecked={true}/>
            <Toggle effect={effect} labelPosition={labelPosition} disabled/>

          </div>
        </div>

        <div className="row propString">
          <code className='u-full-width '>{codeString}</code>
        </div>
        <div className="row ">
          <div className="four columns">
            <label htmlFor="effectchoice">Choose a toggle effect</label>
            <select className='u-full-width' id='effectchoice' value={effect} onChange={this.updateEffect}>
              {options}
            </select>
          </div>

          <div className="five columns">
            <label htmlFor="labelstr">
              Label text
            </label>
            <input className="u-full-width" type="text" value={label} onChange={this.updateLabel} id="labelstr"/>
          </div>
          <div className="three columns">
            <label htmlFor="fontsize">
              Toggle Font Size
            </label>
            <input className="u-full-width" type="number" id="fontsize" min={1} defaultValue={2} max={3} step={0.1} onChange={this.updateFontSize}/>
          </div>

        </div>
        <div className="row .row--centered">
          <div className="twelve columns button-group ">
            <label htmlFor="labelstr">
              Label Position
            </label>
            <div className=''>
              <button onClick={this.updatePosition('left')}>Left</button>
              <button onClick={this.updatePosition('top')}>Top</button>
              <button onClick={this.updatePosition('right')}>Right</button>
              <button onClick={this.updatePosition('bottom')}>Bottom</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let ShowCase = React.createClass({

  renderToggle: function (effect) {
    const isDark = (darkBackgroundEffects.indexOf(effect)) > -1
      ? true
      : false;
    const classes = cs('row', [isDark && 'playground--dark']);
    return (
      <div className={classes}>
        <h4>{effect}</h4>

        <Toggle effect={effect}/>
        <Toggle defaultChecked={true} effect={effect}/>
        <Toggle effect={effect} disabled/>

      </div>
    )
  },
  render() {
    const toggles = Object.keys(effects).map(this.renderToggle);
    return (
      <div className="showcase">
        {toggles}
      </div>
    );
  }
});

render(
  <ShowCase/>, document.getElementById('anchor'));

render(
  <Example/>, document.getElementById('playground'));

import React from 'react';
import {
  render
} from 'react-dom';
import FancySwitch from 'lib/index';
import effects from 'lib/components/switchStyles';
import cs from 'classnames';

// var a11y = require('react-a11y');
// a11y(React);

let App = React.createClass({

  getInitialState: function () {
    return {value: ''}
  },
  componentDidMount: function () {

    let cb = () => {
      const value = this.state.value;
      // console.log(value);
      let v = (value == '')
        ? 'text'
        : value.substr(0, value.length - 1);
      // this.setState({
      //   value: v
      // })
    }
    setInterval(cb, 1000, 2000);
  },

  fakeOnChange: function () {
    console.log("fakeOnChange");
  },

  renderSwitch: function (effect, background) {
    const classes = cs('container', background);
    return (
      <div className={classes}>
        <div className='inline-content'>
          <FancySwitch label={effect} effect={effect} labelPosition='left'/>
          <FancySwitch label={effect} defaultChecked={true} effect={effect} onChange={this.fakeOnChange} labelPosition='right'/>
        </div>
      </div>
    )

  },
  render () {

    const l = 'Test-Label';
    const dv = 'lorem ipsum';

    const {
      value
    } = this.state;

    return (
      <div className="container">
        {this.renderSwitch('foxtrot', 'bg-3')}
        {this.renderSwitch('echo')}
        {this.renderSwitch('charlie')}
        {this.renderSwitch('sierra')}

        {this.renderSwitch('lima')}
        {this.renderSwitch('bbounce')}
        {this.renderSwitch('neonpush')}
        {this.renderSwitch('ios6')}
      </div>
    );
  }
});

render(
  <App/>, document.getElementById('anchor'));

class Example extends React.Component {

  constructor (props) {
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
    return () => {
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

    return '<FancySwitch  ' + es + '  ' + lps + '   ' + ls + '  />';

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

    const darkBackground = ['foxtrot', 'skeleton'];
    const isDark = (darkBackground.indexOf(effect)) > -1
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
            <FancySwitch label={label} effect={effect} labelPosition={labelPosition}/>
          </div>
        </div>

        <h4>Configure</h4>
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

render(
  <Example/>, document.getElementById('playground'));

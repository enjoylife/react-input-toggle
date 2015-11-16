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

  renderSwitch: function (effectName, background) {
    const classes = cs('container', background);
    return (
      <div className={classes}>
        <div className='inline-content'>
          <FancySwitch label={effectName} effectName={effectName} labelPostion='left'/>
          <FancySwitch label={effectName} defaultChecked={true} effectName={effectName} onChange={this.fakeOnChange} labelPostion='right'/>
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
        {this.renderSwitch('b2spirit', 'bg-2')}
        {this.renderSwitch('simplygreen')}
        {this.renderSwitch('bbounce')}
        {this.renderSwitch('neonpush')}
        {this.renderSwitch('ios6')}
      </div>
    );
  }
});

render(
  <App/>, document.getElementById('anchor'));

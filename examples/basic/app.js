import React from 'react';
import {render} from 'react-dom';
import {FancyInput, FancySwitch} from '../../lib/index';

var a11y = require('react-a11y');
a11y(React);

let App = React.createClass({

  getInitialState: function () {
    return {
      value: ''
    }
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

  renderSwitch: function (effectName) {

    return (
      <div className='container bg-3'>
        <h2>{effectName}</h2>
        <div className='inline-content '>
          <FancySwitch label={'label left'} effectName={effectName} labelPostion='left'/>
          <FancySwitch label={'label right'} effectName={effectName} labelPostion='right'/>
        </div>

        <div className='inline-content '>
          <FancySwitch label={'label top'} effectName={effectName} labelPostion='top'/>
          <FancySwitch label={'label bottom'} effectName={effectName} labelPostion='bottom'/>
        </div>

      </div>
    )

  },
  render () {

    const l = 'Test-Label';
    const dv = 'lorem ipsum';

    const {value} = this.state;

    return (
      <div className="container">
        {this.renderSwitch('sierra')}
        {this.renderSwitch('b2spirit')}
        {this.renderSwitch('simplygreen')}
        {this.renderSwitch('bbounce')}
        {this.renderSwitch('neonpush')}
        {this.renderSwitch('ios6')}
      </div>
    );
  }
});

render(
  <App/>, document.getElementById('container'));

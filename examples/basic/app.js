import React from 'react';
import {render} from 'react-dom';
import {FancyInput, FancySwitch} from '../../lib/index';

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
      this.setState({
        value: v
      })
    }
    setInterval(cb, 1000, 2000);
  },
  render () {

    const l = 'Test-Label';
    const dv = 'lorem ipsum';

    const {value} = this.state;

    return (
      <div className="container">
        <h1>react-fancy-input</h1>
        <div className='content bg-2'>
          <FancySwitch effectName='b2spirit'/>
          <FancySwitch effectName="simplygreen"/>
        </div>
        <div className='content bg-1'>
          <h3 className="example__head">Haruki</h3>

          <div className="example">
            <FancyInput label={l}/>
          </div>

          <div className="example">
            <FancyInput label={l} defaultValue={dv}/>
          </div>

          <div className="example">
            <FancyInput label={l} value={value}/>
          </div>

        </div>

      </div>
    );
  }
});

render(
  <App/>, document.getElementById('container'));

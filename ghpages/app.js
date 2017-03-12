import React from 'react';
import Toggle from '../lib/index';
import '../lib/styles/switch.scss';


import effects from '../lib/components/effects';
import cs from 'classnames';

var Highlight = require('react-highlight');

const darkBackgroundEffects = ['foxtrot', 'skeleton'];
// var a11y = require('react-a11y');
// a11y(React);

class Example extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      effect: 'sierra',
      labelPosition: 'bottom',
      label: 'sierra',
      fontSize: null,
      mainChecked: true
    };
  }

  updateEffect = (e) => {
    console.log(e);
    this.setState({ effect: e.target.value, label: e.target.value });
  };

  updateLabel = (e) => {
    this.setState({ label: e.target.value });
  };

  updatePosition = (pos) => {
    return () => {
      this.setState({ labelPosition: pos });
    }
  };

  updateFontSize = (e) => {
    this.setState({ fontSize: e.target.value });
  };

  componentDidMount() {
  }

  renderCode = () => {
    const {
      effect,
      labelPosition,
      label,
      mainChecked,
    } = this.state;


    const es = `effect="${effect}"`;
    const lps = `labelPosition="${labelPosition}"`;
    const ls = `label="${label }"`;
    const name = `name="${ label }" /*Form name*/`;


    const check = mainChecked ? 'checked' : '';
    const codeString = `import  Toggle  from 'react-input-toggle';
import 'react-input-toggle/dist/react-input-toggle.css';

export default class App extends Component {
  // could also be onFocus, onBlur, etc
  onChange = (e)  => {
    console.log("isChecked",  e.target.checked);
  }
  render () {
    return (
      <div>
        <Toggle 
           ${check} effect={'${effect}'} label={'${label}'} labelPosition={'${labelPosition}'}
            onChange={this.onChange} />
      </div>
    );
  }
}`

    return <Highlight className='language-jsx'>
      {codeString}
    </Highlight>;

    return `<Toggle ${es} ${check} ${name}  \n
    ${ls} ${lps} \n/>`;

  }

  updateMain = (ev) => {
    console.log("isChecked", ev.target.checked);
    this.setState({
      mainChecked: ev.target.checked
    })
  }

  render() {
    const {
      effect,
      labelPosition,
      label,
      fontSize,
      mainChecked
    } = this.state;

    const options = Object.keys(effects).map((effect, i) => {
      return <option value={effect} key={i}>{effect}</option>
    });

    const propString = JSON.stringify(this.state, null, 2);


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
        <small className="hint-text">(Hint: Hit the space bar. Or tap the middle switch)</small>

        <div className="playground-wrapper" style={playStyle}>
          <div className={playCSS}>
            <div className="playground-example">
              <Toggle effect={effect} labelPosition={labelPosition}/>

            </div>
            <div>
              <Toggle onChange={this.updateMain} label={label} effect={effect} labelPosition={labelPosition} autoFocus
                      defaultChecked={mainChecked} name={label}/>
            </div>

            <div>
              <Toggle effect={effect} labelPosition={labelPosition} disabled/>
            </div>

          </div>
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
            <input className="u-full-width" type="number" id="fontsize" min={1} defaultValue={2} max={3} step={0.1}
                   onChange={this.updateFontSize}/>
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
        {this.renderCode()}
      </div>
    )
  }
}

function renderToggle(effect) {
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
};


const ShowCase = (props) => {
  const toggles = Object.keys(effects).map(renderToggle);
  return (
    <div className="showcase">
      {toggles}
    </div>
  );
};

export {
  ShowCase, Example
};





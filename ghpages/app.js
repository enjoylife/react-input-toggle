import React from 'react';
import Toggle from '../lib/index';
import '../lib/styles/switch.scss';


import effects from '../lib/components/effects';
import cs from 'classnames';


const darkBackgroundEffects = ['foxtrot', 'skeleton'];
// var a11y = require('react-a11y');
// a11y(React);

class Example extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      effect: 'sierra',
      labelPosition: 'right',
      label: 'sierra',
      fontSize: null,
      mainChecked: true
    };
  }

  updatePosition = (e) => {
    this.setState({labelPosition: e.target.value });
  };

  updateEffectBtn = (effect) => {
    return () => {
      const keepLabel =  this.state.label == this.state.effect ? effect : this.state.label;
      this.setState({effect: effect, label : keepLabel});
    }

  };

  updateLabel = (e) => {
    this.setState({ label: e.target.value });
  };



  updateFontSize = (e) => {
    this.setState({ fontSize: e.target.value });
  };

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    Prism.highlightAll();

  }


  renderCode = () => {
    const {
      effect,
      labelPosition,
      label,
      mainChecked,
    } = this.state;

    const codeString =
      `import React from 'react';
import Toggle  from 'react-input-toggle';
import 'react-input-toggle/dist/react-input-toggle.css';

function example () {
    return ( 
        <Toggle effect={'${effect}'} 
            label={'${label}'} name={'${label}'} /* form name */ 
            labelPosition={'${labelPosition}'} onChange={console.log} />
      );
  }`;

    return codeString;
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


    const buttons = Object.keys(effects).map((effect, i) => {
      return <button onClick={this.updateEffectBtn(effect)}  key={i}>{effect}</button>
    }) ;

    const labelPositions = ['top','left','right','bottom'].map((effect, i) => {
      return <option value={effect} key={i}>{effect}</option>
    });


    const isDark = (darkBackgroundEffects.indexOf(effect)) > -1;

    const playCSS = cs('playground', [isDark && 'playground--dark']);
    const playStyle = {
      'fontSize': (fontSize == null)
        ? null
        : (fontSize + 'em')
    }
    return (
      <div>
        <div className="row row--centered">
          <div className="twelve columns button-group ">
            <label>Choose a toggle effect</label>
            <div>
              {buttons}
            </div>
          </div>
        </div>
        <div className="playground-wrapper" style={playStyle}>
          <div className={playCSS}>

            <div className="playground-example">

              <Toggle onChange={this.updateMain} label={label} effect={effect} labelPosition={labelPosition} autoFocus
                      defaultChecked={mainChecked} name={label}  />
              <small className="row hint-text">Hint: (space bar.)</small>

            </div>

          </div>

        </div>

        <div className="row ">

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
          <div className="four columns button-group ">
            <label htmlFor="labelstr">
              Label Position
            </label>
            <select className='u-full-width' id='labelstr' value={effect} onChange={this.updatePosition}>
              {labelPositions}
            </select>
          </div>
        </div>


        <pre ref={(code) => {
          this.code = code;
        }}>
          <code className="language-jsx">
               {this.renderCode()}
          </code>

        </pre>

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





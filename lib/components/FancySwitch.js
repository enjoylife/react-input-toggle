import React, {
  PropTypes
} from 'react'

import cs from 'classnames';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';

let _id = 0;
function _genID() {
  return _id++;
}

class FancySwitch extends React.Component {

  static defaultProps = {
    effectName: 'b2spirit',
    label: 'Checkbox label',
    labelPostion: 'left',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    defaultChecked: ''
  };

  constructor (props) {
    super(props);
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    this._id = _genID();
    this.state = {
      isFocused: false,
      fiChecked: false
    }

    this.componentWillMount = () => {
      this.setState({
        fiChecked: this.props.defaultChecked
      });
    }

    this.onChange = (e) => {
      this.setState({
        fiChecked: e.target.checked
      })
    }

    this.onFocus = (e) => {
      this.setState({
        isFocused: true
      });
      this.props
        .onFocus(e);
      console.log("Focused", this._id);
    }

    this.onBlur = (e) => {
      this.setState({
        isFocused: false
      });
      this.props
        .onBlur(e);
      console.log("left", this._id);
    }
  }

  render () {

    const {
      effectName, label, labelPostion, ...otherProps
    } = this.props;

    const {isFocused, fiChecked} = this.state;

    // lock in a value no matter what our internal state is
    const checked = this.props.checked || fiChecked || '';

    const outerCss = cs([
      'fi-switch', 'fi-switch--' + effectName, 'fi-switch--label-' + labelPostion, isFocused == true && 'fi-switch--focused', checked == true && 'fi-switch--checked'
    ]);
    const inputCss = cs([
      'fi-switch__input', 'fi-switch__input--' + effectName
    ]);

    const styleCss = cs([
      'fi-switch__style', 'fi-switch__style--' + effectName
    ]);
    const styleCssExtra = cs([
      'fi-switch__extra', 'fi-switch__extra--' + effectName
    ]);

    const labelCss = cs([
      'fi-switch__label', 'fi-switch__label--' + effectName
    ]);

    // snowflake this mother-fucker
    const htmlFor = 'fi-switch-id-' + this._id;

    return (
      <label role="checkbox" className={outerCss}>
        <label className={labelCss} htmlFor={htmlFor}>
          {label}
        </label>
        <span className="fi-switch__container">
          <input {...otherProps} onBlur={this.onBlur} onChange={this.onChange} onFocus={this.onFocus} className={inputCss} type="checkbox" id={htmlFor}/>
          <span className={styleCss}/>
          <span className={styleCssExtra}/>
        </span>
      </label>
    );
  }
}

export default FancySwitch;

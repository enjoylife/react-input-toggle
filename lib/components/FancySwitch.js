import React, {
  PropTypes
} from 'react'

import switchStyles from './switchStyles';
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
    defaultChecked: false
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

    const {label, labelPostion, effectName} = this.props;

    const {isFocused, fiChecked} = this.state;

    // lock in a value no matter what our internal state is
    const checked = this.props.checked || fiChecked || '';

    const outerCss = cs([
      'fi-switch', 'fi-switch--' + effectName, 'fi-switch--label-' + labelPostion, isFocused == true && 'fi-switch--focused', checked == true && 'fi-switch--checked'
    ]);

    const labelCss = cs([
      'fi-switch__label', 'fi-switch__label--' + effectName
    ]);

    // snowflake this mother-fucker
    const htmlFor = 'fi-switch-id-' + this._id;

    if (!switchStyles.hasOwnProperty(effectName)) {
      throw new Error('The effect "' + effectName + '" was not found. Use default instead')

    }
    const switchProps = {
      htmlFor,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onChange: this.onChange,
      checked
    }
    const switchComponent = switchStyles[effectName](switchProps);

    return (
      <label role="checkbox" aria-labelledby={htmlFor} className={outerCss}>
        <label className={labelCss} aria-label={label} htmlFor={htmlFor}>
          {label}
        </label>
        {switchComponent}
      </label>
    );
  }
}

export default FancySwitch;

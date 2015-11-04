import React, {
  PropTypes
} from 'react'

import cs from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

let _id = 0;
function _genID() {
  return _id++;
}

class FancySwitch extends React.Component {

  static defaultProps = {
    effectName: 'stealth',
    label: 'Checkbox label'
  };

  constructor (props) {
    super(props);
    this._id = _genID();
    this.state = {}
  }

  render () {

    const {
      effectName, label, ...otherProps
    } = this.props;

    const outerCss = cs([
      'fi-switch', 'fi-switch--' + effectName
    ]);
    const inputCss = cs([
      'fi-switch__input', 'fi-switch__input--' + effectName
    ]);

    const styleCss = cs([
      'fi-switch__style', 'fi-switch__style--' + effectName
    ]);
const styleCssExtra = cs([
  'fi-switch__style-extra', 'fi-switch__style-extra--' + effectName
]);

    const labelCss = cs([
      'fi-switch__label', 'fi-switch__label--' + effectName
    ]);

    // snowflake this mother-fucker
    const htmlFor = 'fi-switch-id-' + this._id;

    return (
      <label className={outerCss} htmlFor={htmlFor}>
        <span className={labelCss}>
          {label}
        </span>
        <input {...otherProps} className={inputCss} type="checkbox" id={htmlFor}/>
        <span className={styleCss}/>
        <span className={styleCssExtra}/>
      </label>
    );
  }
}

export default FancySwitch;

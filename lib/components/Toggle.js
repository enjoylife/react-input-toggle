import React, {PropTypes as PT} from 'react'

import effects from './effects';

import cs from 'classnames';


let _id = 0;
function _genID() {
  return _id++;
}

class Toggle extends React.PureComponent {

  static propTypes = {
    defaultChecked: PT.bool,
    disabled: PT.bool,

    label: PT.string,
    labelPosition: PT.oneOf(['top', 'right', 'bottom', 'left']),

    effect: PT.oneOf(Object.keys(effects)),

    onChange: PT.func,
    onFocus: PT.func,
    onBlur: PT.func
  }

  static defaultProps = {
    defaultChecked: false,

    label: '',
    labelPosition: 'left',

    effect: 'echo',

    // no-ops
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {}
  };

  constructor (props) {
    super(props);

    // unique id for all instances
    this._id = _genID();

    // TODO: Test if autofocus still works?
    this.state = {
      isFocused: false
    }
  }

  /**
   * Callback used get our switch's backing input element.
   * @param {DOMElement} c the mounted input created by a switch style
   */
  setRef (c) {
    this._input = c
  }

  onChange (e) {
    // Set focus whenever a user interacts with our switch
    (this._input.focus());

    // Inform our parents if needed
    this.props.onChange(e);
  }

  onFocus (e) {
    this.setState({isFocused: true});

    // Inform our parents if needed
    (this.props.onFocus(e));
  }

  onBlur (e) {
    this.setState({isFocused: false});
    // Inform our parents if needed
    (this.props.onBlur(e));
  }

  onMouseDown (e) {
    // Prevent flick of  focus styling due to the focused element switching
    e.preventDefault();
  }

  render () {
    // we pull out values even if not using in this render
    // so we can limit what we pass down in ...otherProps
    const {
      label,
      labelPosition,
      effect,
      defaultChecked,
      disabled,
      ...otherProps
    } = this.props;
    const {
      isFocused
    } = this.state;

    const checked = this.props.hasOwnProperty('checked') ? this.props.checked : defaultChecked;

    const outerCss = cs('rt-toggle', 'rt-toggle--' + effect, 'rt-toggle--label-' + labelPosition, isFocused == true && !disabled && 'rt-toggle--focused', checked == true && 'rt-toggle--checked', disabled == true && 'rt-toggle--disabled');

    const labelCss = cs([
      'rt-toggle__label',
      'rt-toggle__label--' + effect
    ]);

    // minimizing id clashes with other code
    const htmlFor = 'rt-toggle-id-' + this._id;

    // setting otherProps first so they can be overridden as needed
    const switchProps = {
      ...otherProps,
      htmlFor,
      checked,
      disabled,
      // ES7 binding
      setRef: :: this.setRef,
      onBlur: :: this.onBlur,
      onFocus: :: this.onFocus,
      onChange: :: this.onChange
    }
    // React Template Component
    const switchComponent = effects[effect](switchProps);

    return (
      <label onMouseDown={this.onMouseDown} className={outerCss}>
        <span className={labelCss} htmlFor={htmlFor}>
          {label}
        </span>
        {switchComponent}
      </label>
    );
  }
}

export default Toggle;

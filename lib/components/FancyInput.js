import React, {
  PropTypes
} from 'react'

// Utils
import cs from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

let _id = 0;

function _genID() {
  return _id++;
}

/**
 * TODO: Debounce
 * TODO: Documentation
 * TODO: change to es6 classes
 */
const FancyInput = React.createClass({
  displayName: 'FancyInput',
  mixins: [PureRenderMixin],
  propTypes: {
    onChange: PropTypes.func,
    effectName: PropTypes.oneOf(['haruki']),
    label: PropTypes.string,
    defaultValue: PropTypes.string
  },

  getDefaultProps: function () {
    return {
      label: 'Unlabeled',
      effectName: 'haruki',
      onChange: () => {},
      onFocus: () => {},
      onBlur: () => {},
      defaultValue: ''
    };
  },

  getInitialState: function () {
    this._id = _genID();
    return {
      fiValue: '',
      isFocused: false
    }
  },

  componentWillMount: function () {
    this.setState({
      fiValue: this.props.defaultValue
    })
  },

  onChange: function (e) {
    this.setState({
      fiValue: e.target.value
    });
    this.props
      .onChange(e);
  },

  onFocus: function (e) {
    this.setState({
      isFocused: true
    })
    this.props
      .onFocus(e);
  },

  onBlur: function (e) {
    this.setState({
      isFocused: false
    });
    this.props
      .onBlur(e);
  },

  render () {
    // TODO: test if a user sets onChange, etc, we still work
    const {
      label, effectName, value, ...otherProps
    } = this.props;

    const {fiValue, isFocused} = this.state;

    // lock in a value no matter what our internal state is
    let inputValue = this.props.value || fiValue || '';

    // css all the things!!
    const spanCss = cs([
      'fi-input', 'fi-input--' + effectName,
      // Gotta love js eval order
      (isFocused == true || inputValue !== '') && 'fi-input--filled'
    ]);

    const inputCss = cs([
      'fi-input__field', 'fi-input__field--' + effectName
    ]);

    const labelCss = cs([
      'fi-input__label', 'fi-input__label--' + effectName
    ]);

    const innerSpanCss = cs([
      'fi-input__label-content', 'fi-input__label-content--' + effectName
    ]);

    // snowflake this mother-fucker
    const htmlFor = 'fi-input-id-' + this._id;

    return (
      <span className={spanCss}>
        <input {...otherProps} className={inputCss} value={inputValue} type="text" id={htmlFor} onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus}/>
        <label className={labelCss} htmlFor={htmlFor}>
          <span className={innerSpanCss}>
            {label}
          </span>
        </label>
      </span>
    )
  }
})

export default FancyInput;

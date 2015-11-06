import React from 'react'
import cs from 'classnames';

const Template = (props) => {

  const {effectName, htmlFor, onBlur, onFocus, onChange, checked} = props;

  const spanCss = cs([
    'fi-switch__container', 'fi-switch__container--' + effectName
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

  return (
    <span className={spanCss}>
      <input onBlur={onBlur} aria-labelledby={htmlFor} onChange={onChange} onFocus={onFocus} className={inputCss} type="checkbox" id={htmlFor}/>
      {props.children}
    </span>
  );
}

const b2spirit = (props) => {

  const {htmlFor, onBlur, onFocus, onChange, checked} = props;

  const effectName = 'b2spirit';

  return (
    <Template effectName={effectName} {...props}>
      <span className='fi-b2spirit__track'/>
      <span className='fi-b2spirit__handle'/>
    </Template>
  )
}

const simplygreen = (props) => {

  const effectName = 'simplygreen';

  return (
    <Template effectName={effectName} {...props}>
      <span className='fi-simplygreen__track'/>
      <span className='fi-simplygreen__handle'/>
    </Template>
  )

}

export default {b2spirit, simplygreen}

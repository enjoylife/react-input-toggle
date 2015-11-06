import React from 'react'
import cs from 'classnames';


const b2spirit = (props) => {

  const {htmlFor, onBlur, onFocus, onChange,  checked} = props;

  const effectName = 'b2spirit';

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
    <span className="fi-switch__container">
      <input onBlur={onBlur} aria-labelledby={htmlFor} onChange={onChange} onFocus={onFocus} className={inputCss} type="checkbox" id={htmlFor}/>
      <span className='fi-b2spirit__track' />
      <span className='fi-b2spirit__handle' />
    </span>
  )
}




const simplygreen = (props) => {

  const {htmlFor, onBlur, onFocus, onChange, checked} = props;

  const effectName = 'simplygreen';

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
    <span className="fi-switch__container">
      <input onBlur={onBlur} aria-labelledby={htmlFor} onChange={onChange} onFocus={onFocus} className={inputCss} type="checkbox" id={htmlFor}/>
      <span className={styleCss}/>
      <span className={styleCssExtra}/>
    </span>
  )
}


export default  { b2spirit, simplygreen }

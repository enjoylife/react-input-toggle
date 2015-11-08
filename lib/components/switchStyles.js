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
      <input onBlur={onBlur} aria-labelledby={htmlFor} onChange={onChange} onFocus={onFocus} className={inputCss} checked={checked} type="checkbox" id={htmlFor}/>
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

const sierra = (props) => {
  const effectName = 'sierra';

  return (
    <Template effectName={effectName} {...props}>
      <span className='fi-sierra__track'/>
      <span className='fi-sierra__handle'/>
      <svg className="fi-sierra__check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
        <path className="fi-sierra__path" d="M17.417,37.778l9.93,9.909l25.444-25.393"/>
      </svg>

    </Template>
  )
}

const charlie = (props) => {
  const effectName = 'charlie';

  return (
    <Template effectName={effectName} {...props}>
      <span className="fi-charlie__track"/>
      <span className="fi-charlie__track--faux">
        <span className="fi-charlie__handle"/>
        <span className="fi-charlie__handle--border"/>
      </span>

      <span className="fi-charlie__text--on">ON</span>
      <span className="fi-charlie__text--off">OFF</span>
    </Template>
  )
}

const bbounce = (props) => {
  const effectName = 'bbounce';

  return (
    <Template effectName={effectName} {...props}>
      <span className="bbounce__body">
        <span className="bbounce__switch"/>
        <span className="bbounce__track">
          <span className="bbounce__badge"/>
          <span className="bbounce__badge bbounce__badge--negative"/>
        </span>
      </span>

    </Template>
  )
}

const ios6 = (props) => {
  const effectName = 'ios6';

  return (
    <Template effectName={effectName} {...props}>
      <div className='ios6__switch'></div>
    </Template>
  )
}

const neonpush = (props) => {
  const effectName = 'neonpush';
  return (
    <Template effectName={effectName} {...props}>
      <span className="neonpush__btn"/>
    </Template>
  )
}

export default {b2spirit, simplygreen, bbounce, ios6, neonpush, sierra, charlie}

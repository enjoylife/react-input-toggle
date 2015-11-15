import React from 'react'
import cs from 'classnames';

const Template = (props) => {

  const {
    effectName,
    htmlFor,
    onBlur,
    onFocus,
    onChange,
    checked,
    setRef,
    children,
    ...otherProps
  } = props;

  const spanCss = cs([
    'fi-switch__container',
    'fi-switch__container--' + effectName
  ]);

  const inputCss = cs([
    'fi-switch__input',
    'fi-switch__input--' + effectName
  ]);

  const styleCss = cs([
    'fi-switch__style',
    'fi-switch__style--' + effectName
  ]);
  const styleCssExtra = cs([
    'fi-switch__extra',
    'fi-switch__extra--' + effectName
  ]);
  return (
    <span className={spanCss}>
      <input onBlur={onBlur} ref={setRef} aria-labelledby={htmlFor} onChange={onChange} onFocus={onFocus} className={inputCss} checked={checked} type="checkbox" id={htmlFor} {...otherProps}/>
      {children}
    </span>
  );
}

const b2spirit = (props) => {

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

const foxtrot = (props) => {
  const effectName = 'foxtrot';

  return (
    <Template effectName={effectName} {...props}>
      <span className="fi-foxtrot__track"/>
      <span className="fi-foxtrot__text fi-foxtrot__text--on">ON</span>
      <span className=" fi-foxtrot__text fi-foxtrot__text--off">OFF</span>
      <span className="fi-foxtrot__handle"/>
      <svg className="fi-foxtrot__handle-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" x="0px" y="0px">

        <rect rx={2} ry={2} height={50} width={5} x={25} y={25}/>
        <rect rx={2} ry={2} height={70} width={5} x={50} y={15}/>
        <rect rx={2} ry={2} height={50} width={5} x={75} y={25}/>

      </svg>

    </Template>
  )
}

const echo = (props) => {
  const effectName = 'echo';

  return (
    <Template effectName={effectName} {...props}>
      <span className="fi-echo__track"/>
      <span className="fi-echo__handle"/>

      <svg className="fi-echo__icon fi-echo__icon--on" version="1.1" viewBox="0 0 100 100" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
        <path d="M76.1618449,18.6433479 L86.8851316,27.6412539 C87.3112368,27.9987985 87.3631973,28.6285973 87.0071338,29.0529372 L43.3014211,81.1393773 C43.0807605,81.4023504 42.7559402,81.5236886 42.4400343,81.4944043 C42.2374084,81.4781838 42.0372772,81.4004766 41.8690111,81.2592846 L12.7727666,56.8446366 C12.3441215,56.4849606 12.2880367,55.8529397 12.6433479,55.4294962 L21.6412539,44.7062095 C21.9987985,44.2801043 22.6305811,44.2298085 23.0573684,44.5879255 L40.6784316,59.3737532 L74.7504227,18.7683355 C75.1078026,18.3424266 75.7384014,18.2880367 76.1618449,18.6433479 Z M76.1618449,18.6433479"/>
      </svg>
      <svg className="fi-echo__icon fi-echo__icon--off" baseProfile="tiny" version="1.1" viewBox="0 0 100 100" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
        <path d="M50.003,61.176l20.715,21.206c2.078,2.145,3.429,2.166,5.546,0l4.156-4.256   c2.035-2.084,2.174-3.451,0-5.678L58.49,50l21.931-22.449c2.055-2.109,2.094-3.533,0-5.68l-4.156-4.254   c-2.156-2.207-3.488-2.105-5.546,0L50.003,38.824L29.289,17.617c-2.059-2.105-3.391-2.207-5.547,0l-4.154,4.254   c-2.096,2.146-2.059,3.57,0,5.68L41.517,50L19.588,72.448c-2.174,2.227-2.059,3.594,0,5.678l4.154,4.256   c2.098,2.166,3.449,2.145,5.547,0L50.003,61.176z" fill-rule="evenodd"/>
      </svg>

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

export default {
  b2spirit,
  simplygreen,
  bbounce,
  ios6,
  neonpush,
  sierra,
  charlie,
  echo,
  foxtrot
}

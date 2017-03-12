import React from 'react'
import cs from 'classnames';

const Template = (props) => {

  const {
    effect,
    htmlFor,
    onBlur,
    onFocus,
    onChange,
    checked,
    setRef,
    children,
    disabled,
    ...otherProps
  } = props;

  const spanCss = cs([
    'rt-toggle__container',
    'rt-toggle__container--' + effect
  ]);

  const inputCss = cs([
    'rt-toggle__input',
    'rt-toggle__input--' + effect
  ]);

  const styleCss = cs([
    'rt-toggle__style',
    'rt-toggle__style--' + effect
  ]);
  const styleCssExtra = cs([
    'rt-toggle__extra',
    'rt-toggle__extra--' + effect
  ]);
  return (
    <span className={spanCss}>
      <input onBlur={onBlur} ref={setRef} onChange={onChange} aria-checked={checked} onFocus={onFocus} className={inputCss} checked={checked} aria-disabled={disabled} disabled={disabled} type="checkbox" id={htmlFor} {...otherProps}/>
      {children}
    </span>
  );
}

const skeleton = (props) => {

  const effect = 'skeleton';

  return (
    <Template effect={effect} {...props}>
      <span className='rt-skeleton__track'/>
      <span className='rt-skeleton__handle--container '>
        <span className='rt-skeleton__handle--border'/>
        <span className='rt-skeleton__handle'/>
        <span className='rt-skeleton__handle--inner'/>
      </span>
    </Template>
  )
}

const lima = (props) => {

  const effect = 'lima';

  return (
    <Template effect={effect} {...props}>
      <span className='rt-lima__track'/>
      <svg className="rt-lima__check" version="1.1" viewBox="0 0 100 100" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
        <path d="M76.1618449,18.6433479 L86.8851316,27.6412539 C87.3112368,27.9987985 87.3631973,28.6285973 87.0071338,29.0529372 L43.3014211,81.1393773 C43.0807605,81.4023504 42.7559402,81.5236886 42.4400343,81.4944043 C42.2374084,81.4781838 42.0372772,81.4004766 41.8690111,81.2592846 L12.7727666,56.8446366 C12.3441215,56.4849606 12.2880367,55.8529397 12.6433479,55.4294962 L21.6412539,44.7062095 C21.9987985,44.2801043 22.6305811,44.2298085 23.0573684,44.5879255 L40.6784316,59.3737532 L74.7504227,18.7683355 C75.1078026,18.3424266 75.7384014,18.2880367 76.1618449,18.6433479 Z M76.1618449,18.6433479"/>
      </svg>
      <span className='rt-lima__handle--container '>
        <span className='rt-lima__handle--border'/>
        <span className='rt-lima__handle'/>
      </span>
    </Template>
  )

}

const sierra = (props) => {
  const effect = 'sierra';

  return (
    <Template effect={effect} {...props}>
      <span className='rt-sierra__track'/>
      <span className='rt-sierra__handle'/>
      <svg className="rt-sierra__check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
        <path className="rt-sierra__path" d="M17.417,37.778l9.93,9.909l25.444-25.393"/>
      </svg>

    </Template>
  )
}

const charlie = (props) => {
  const effect = 'charlie';

  return (
    <Template effect={effect} {...props}>
      <span className="rt-charlie__track"/>
      <span className="rt-charlie__track--faux">
        <span className="rt-charlie__handle"/>
        <span className="rt-charlie__handle--border"/>
      </span>

      <span className="rt-charlie__text--on" aria-hidden='true' role="presentation" tabIndex="-1">ON</span>
      <span className="rt-charlie__text--off" aria-hidden='true' role="presentation" tabIndex="-1">OFF</span>
    </Template>
  )
}

const foxtrot = (props) => {
  const effect = 'foxtrot';

  return (
    <Template effect={effect} {...props}>
      <span className="rt-foxtrot__track"/>
      <span className="rt-foxtrot__text rt-foxtrot__text--on" aria-hidden='true' role="presentation" tabIndex="-1">ON</span>
      <span className=" rt-foxtrot__text rt-foxtrot__text--off" role="presentation" tabIndex="-1">OFF</span>
      <span className="rt-foxtrot__handle"/>
      <svg className="rt-foxtrot__handle-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" x="0px" y="0px">

        <rect rx={2} ry={2} height={50} width={5} x={25} y={25}/>
        <rect rx={2} ry={2} height={70} width={5} x={50} y={15}/>
        <rect rx={2} ry={2} height={50} width={5} x={75} y={25}/>

      </svg>

    </Template>
  )
}

const echo = (props) => {
  const effect = 'echo';

  return (
    <Template effect={effect} {...props}>
      <span className="rt-echo__track"/>
      <span className="rt-echo__handle"/>

      <svg className="rt-echo__icon rt-echo__icon--on" version="1.1" viewBox="0 0 100 100" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
        <path d="M76.1618449,18.6433479 L86.8851316,27.6412539 C87.3112368,27.9987985 87.3631973,28.6285973 87.0071338,29.0529372 L43.3014211,81.1393773 C43.0807605,81.4023504 42.7559402,81.5236886 42.4400343,81.4944043 C42.2374084,81.4781838 42.0372772,81.4004766 41.8690111,81.2592846 L12.7727666,56.8446366 C12.3441215,56.4849606 12.2880367,55.8529397 12.6433479,55.4294962 L21.6412539,44.7062095 C21.9987985,44.2801043 22.6305811,44.2298085 23.0573684,44.5879255 L40.6784316,59.3737532 L74.7504227,18.7683355 C75.1078026,18.3424266 75.7384014,18.2880367 76.1618449,18.6433479 Z M76.1618449,18.6433479"/>
      </svg>
      <svg className="rt-echo__icon rt-echo__icon--off" baseProfile="tiny" version="1.1" viewBox="0 0 100 100" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
        <path d="M50.003,61.176l20.715,21.206c2.078,2.145,3.429,2.166,5.546,0l4.156-4.256   c2.035-2.084,2.174-3.451,0-5.678L58.49,50l21.931-22.449c2.055-2.109,2.094-3.533,0-5.68l-4.156-4.254   c-2.156-2.207-3.488-2.105-5.546,0L50.003,38.824L29.289,17.617c-2.059-2.105-3.391-2.207-5.547,0l-4.154,4.254   c-2.096,2.146-2.059,3.57,0,5.68L41.517,50L19.588,72.448c-2.174,2.227-2.059,3.594,0,5.678l4.154,4.256   c2.098,2.166,3.449,2.145,5.547,0L50.003,61.176z" fillRule="evenodd"/>
      </svg>

    </Template>
  )
}

const bbounce = (props) => {
  const effect = 'bbounce';

  return (
    <Template effect={effect} {...props}>
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
  const effect = 'ios6';

  return (
    <Template effect={effect} {...props}>
      <div className='ios6__switch'></div>
    </Template>
  )
}

const neonpush = (props) => {
  const effect = 'neonpush';
  return (
    <Template effect={effect} {...props}>
      <span className="neonpush__btn"/>
    </Template>
  )
}

export default {skeleton, lima, bbounce, ios6, neonpush, sierra, charlie, echo, foxtrot}

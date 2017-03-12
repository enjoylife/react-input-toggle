# react-input-toggle

A collection of aesthetically pleasing, accessible and customizable toggles build with React.

[![Travis](https://img.shields.io/travis/enjoylife/react-input-toggle.svg?style=flat-square)](https://travis-ci.org/enjoylife/react-input-toggle)

[![Codecov](https://img.shields.io/codecov/c/github/enjoylife/react-input-toggle.svg?style=flat-square)]()



# What problem does it solve you?

You get an interesting selection of keyboard and screen reader accessible,  buttons. More show than business really. I would say this little set of toggles is more creative than practical. But in2 any case, enjoy.

## Installation

`npm install react-input-toggle`

## Usage

```jsx

import  Toggle  from 'react-input-toggle';
import 'react-input-toggle/dist/react-input-toggle.css';

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello, world.</h1>
        <Toggle label={'Test Label'} effect={'sierra'} labelPosition={'left'} />
      </div>
    );
  }
}

```

### License

MIT

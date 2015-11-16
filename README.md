# react-input-toggle

A collection of aesthetically pleasing, accessible and customizable toggles build with React.

[![Travis](https://img.shields.io/travis/enjoylife/react-input-toggle.svg?style=flat-square)](https://travis-ci.org/enjoylife/react-input-toggle)

[![Codecov](https://img.shields.io/codecov/c/github/enjoylife/react-input-toggle.svg?style=flat-square)]()

## Installation

`npm install react-input-toggle`

## Usage

```jsx

import  FancySwitch  from 'react-input-toggle';
import 'react-input-toggle/dist/react-input-toggle.css';

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello, world.</h1>
        <FancySwitch label={'Test Label'} effectName={'sierra'} labelPostion={'left'} />
      </div>
    );
  }
}

```

### License

MIT

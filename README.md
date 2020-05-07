> :exclamation: **DEPRECATED** :exclamation: : Superseded by @fdmg/design-system. See: https://github.com/FDMediagroep/fd-design-system

# fdmg-ts-react-image-button

[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-ts-react-image-button.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-ts-react-image-button)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fdmg-ts-react-image-button/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fdmg-ts-react-image-button?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Fts-react-image-button.svg)](https://badge.fury.io/js/%40fdmg%2Fts-react-image-button)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fdmg-ts-react-image-button.svg)](https://greenkeeper.io/)

[ReactJS](https://reactjs.org/) ImageButton component. This component renders an image with onClick hook.

## Installation
- Run `npm i --save-dev @fdmg/ts-react-image-button`

or

- Run `yarn add @fdmg/ts-react-image-button --dev`

## Usage
### TypeScript
```
import * as React from 'react';
import ImageButton from 'fdmg-ts-react-image-button';

export default class foo {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    clickHandler() {
        console.info('Image button clicked');
    }

    render() {
        return (
            <ImageButton
                src={"img/button.svg"} 
                onClick={this.clickHandler.bind(this)}
                className="image-btn btn"
                alt="Special button"
            />
        );
    }
}
```

### Resulting HTML
```
<span class="image-btn btn"
      role="button"
      tabIndex="0"
      aria-label="Special button">
    <img alt="Special button" src="img/button.svg"/>
</span>
```

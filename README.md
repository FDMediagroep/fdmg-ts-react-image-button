[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-ts-react-image-button.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-ts-react-image-button)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fdmg-ts-react-image-button/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fdmg-ts-react-image-button?branch=master)

# fdmg-ts-react-image-button
[ReactJS](https://reactjs.org/) ImageButton component. This component renders an image with onClick hook.

## Installation
- Run `npm i --save-dev fdmg-ts-react-image-button`

or

- Run `yarn add fdmg-ts-react-image-button --dev`

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
    <img src="img/button.svg" alt="Special button" class="image-btn btn" />
```
# modernizr-javascript
>


## Description
Javascript functions to set and toggle class-names according to modernizr tests

## Installation
### bower
`bower install https://github.com/FCOO/modernizr-javascript.git --save`

## Usage

Used to toggle class-names according to [Modernizr](https://modernizr.com/) tests.

See [FCOO/modernizr-scss](https://github.com/FCOO/modernizr-scss) to see how to create the css for a given Modernizr-test

### Methods

    window.modernizrOn( test ); 
    window.modernizrOff( test );
    window.modernizrToggle( test, on );

#### Example
    modernizrOn( 'my-test'); //Add class-name 'my-test' to <html> and remove class-name 'no-my-test' from <html>

    modernizrOff( 'my-other-test'); //Add class-name 'no-my-other-test' to <html> and remove class-name 'my-other-test' from <html>


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/modernizr-javascript/LICENSE).

Copyright (c) 2016 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk

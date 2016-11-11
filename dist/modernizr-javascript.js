/****************************************************************************
	modernizr-javascript.js, 

	(c) 2016, FCOO

	https://github.com/FCOO/modernizr-javascript
	https://github.com/FCOO

****************************************************************************/

(function ($, window/*, document, undefined*/) {
	"use strict";
	
	var ns = window;

    ns.modernizrOn  = function( test ){ ns.modernizrToggle( test, true ); };

    ns.modernizrOff = function( test ){ ns.modernizrToggle( test, false ); };

    ns.modernizrToggle = function( test, on ){ 
        on = !!on; //on => Boolean
        $('html')
            .toggleClass( test, on )
            .toggleClass( 'no-' + test, !on );
    };

}(jQuery, this, document));
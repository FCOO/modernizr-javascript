/****************************************************************************
	modernizr-javascript.js, 

	(c) 2016, FCOO

	https://github.com/FCOO/modernizr-javascript
	https://github.com/FCOO

****************************************************************************/

(function ($, window/*, document, undefined*/) {
	"use strict";
	
	var ns = window;

    //Extend the jQuery prototype
    $.fn.extend({
        modernizrOn : function( test ){ return this.modernizrToggle( test, true ); },

        modernizrOff: function( test ){ return this.modernizrToggle( test, false ); },
        
        modernizrToggle: function( test, on ){ 
                            on = !!on; //on => Boolean
                            return this.toggleClass( test, on ).toggleClass( 'no-' + test, !on );
                         }
    });


    //Add methods to window = works on <html>
    ns.modernizrOn  = function( test ){ ns.modernizrToggle( test, true ); };

    ns.modernizrOff = function( test ){ ns.modernizrToggle( test, false ); };

    ns.modernizrToggle = function( test, on ){ $('html').modernizrToggle( test, on ); };

}(jQuery, this, document));
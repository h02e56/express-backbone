require([
	'backbone',
	'modules/notes',
	'application',
    'router'
],
function ( Backbone, notes, APP) {
    'use strict';
    //
    APP.myRouter = new APP.Router();
    Backbone.history.start();
	return APP;
});

    


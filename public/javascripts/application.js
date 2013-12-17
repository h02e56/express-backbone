define([
	'backbone',
],function( Backbone) {
    'use strict';
    //shortcuts
    var _slice = Array.prototype;

    //end shortcuts

    var APP = APP || (function(){
        var modules = {};

        var loadModule = function loadModule(name){
            if(modules[name]){
                return modules[name];
            }else{
                return modules[name] = {
                    Views:{}
                };
            }
        };

        var getModule = function getModule (module){
            if(module){
                return (modules[module]) ?  modules[module] : "no existe";
            }else{
                return modules;//get aLL MODULES;
            }
        };

        return{
            modules:modules,
            loadModule : loadModule,
            getModule : getModule
        };

    })();
    return APP;
});

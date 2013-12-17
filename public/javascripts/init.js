require.config({

    baseUrl: "javascripts",

    /* starting point for application */
    deps: ['backbone', 'main'],


    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },

    paths: {
        jquery: 'bower_components/jquery/jquery',
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/underscore/underscore'
<<<<<<< HEAD
    },

    //almond use instead or require.js
    name: "bower_components/almond/almond",
    include: ['main'],
    insertRequire: ['main'],
    out: 'main-built.js',
    wrap: true


=======
    }
>>>>>>> a980d6b6e18a407e91c3a7d189a4ea9c7f115311
});

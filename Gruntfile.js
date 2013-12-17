/*global module:false*/
module.exports = function(grunt) {
    'use strict';

        // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-requirejs');

    
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            sourcefiles: {
                src: ['public/javascripts/**/*.js', '!src/app/bower_components/**/*.js']
            }
        },
        requirejs: {
            options: {
                'appDir': 'public/javascripts',
                'dir': 'build',
                'mainConfigFile': 'public/javascripts/init.js',
                'optimize': 'uglify2',
                'normalizeDirDefines': 'skip',
                'skipDirOptimize': true,
            },
            // centralized: {
            //     options: {
            //         'modules': [{
            //             'name': 'common',
            //             'include': ['jquery',
            //                 'underscore',
            //                 'backbone',
            //                 'text',
            //                 'app/hello/main',
            //                 'app/world/main',
            //             ],
            //         }
            //         ]
            //     }
            // },
            // centralizedAlmond: {
            //     options: {
            //         almond: true,
            //         replaceRequireScript: [{
            //             files: ['build/hello.html'],
            //             module: 'common',
            //             modulePath: 'common'
            //         }, {
            //             files: ['build/world.html'],
            //             module: 'common',
            //             modulePath: 'common'
            //         }],
            //         'modules': [{
            //             'name': 'common',
            //             'include': ['jquery',
            //                 'underscore',
            //                 'backbone',
            //                 'text',
            //                 'public/javascripts/main'
            //             ],
            //         },
            //         ],
            //     }
            // }
            // independent: {
            //     options: {
            //         replaceRequireScript: [{
            //             files: ['build/hello.html'],
            //             module: 'app/hello/main',
            //             modulePath: 'app/hello/main'
            //         }, {
            //             files: ['build/world.html'],
            //             module: 'app/world/main',
            //             modulePath: 'app/world/main'
            //         }],
            //         'modules': [{
            //             name: 'app/hello/main',
            //             include: ['backbone', 'common'],
            //         }, {
            //             name: 'app/world/main',
            //             include: ['backbone', 'common'],
            //         }
            //         ],
            //     }
            // },
            // independentAlmond: {
            //     options: {
            //         almond: true,
            //         wrap: true,
            //         replaceRequireScript: [{
            //             files: ['build/hello.html'],
            //             module: 'app/hello/main',
            //             modulePath: 'app/hello/main'
            //         }, {
            //             files: ['build/world.html'],
            //             module: 'app/world/main',
            //             modulePath: 'app/world/main'
            //         }],
            //         'modules': [{
            //             name: 'app/hello/main',
            //             include: ['backbone'],
            //             insertRequire: ['app/hello/main']
            //         }, {
            //             name: 'app/world/main',
            //             include: ['backbone'],
            //             insertRequire: ['app/world/main']
            //         }
            //         ],
            //     }
            // },
            // shared: {
            //     options: {
            //         'modules': [{
            //             'name': 'common',
            //             'include': ['jquery',
            //                 'underscore',
            //                 'backbone',
            //                 'text',
            //             ],
            //         },
            //         {
            //             'name': 'app/hello/main',
            //             'exclude': ['common']
            //         },
            //         {
            //             'name': 'app/world/main',
            //             'exclude': ['common']
            //         }
            //         ],
            //     }
            // },
        }
    });



    // Default task.
    grunt.registerTask('default', ['jshint','requirejs']);
};

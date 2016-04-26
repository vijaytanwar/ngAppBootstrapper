module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    //
    //  Enviroment Setup
    //
    env: {
        options : {
            /* Shared Options Hash */
            //globalOption : 'foo'
        },
        dev: {
            NODE_ENV : 'DEVELOPMENT'
        },
        prod : {
            NODE_ENV : 'PRODUCTION'
        }
    },

    //
    // Preprocess setup
    //
    preprocess : {
      task1: {
          src: 'index-dev.html',
          ext: '.html',
          cwd: '.',
          dest: 'dist',
          expand: true,
          flatten: false
      }
    },

    
    //
    // Sass setup
    //
    sass: {
      dist: {
        files: {
          'assets/styles/main.css': 'assets/scss/main.scss'
        }
      }
    },

  
   //
   // Clean Task
   //
    clean:{
      dist: ['dist'],
      tmp: ['tmp']
    },
  
   //
   // Copy Task
   //
   copy: {
      indexPage: {
        options: {
          flatten: true
        },
        files: {
          'index.html': 'dist/index-dev.html',
        }
      },
      assets: {
        files: [
          {expand: true, src: ['assets/fonts/*', 'assets/images/*' ], dest: 'dist/' },
        ],
      },
     bower_components: {
        files: [
          { expand: true, src: ['bower_components/angular-material/angular-material.min.css'], dest: 'dist/' },
        ],
      }
    },


    //
    // Check for code errors
    //
    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    
    //
    // Watch for changes in files
    //
    watch: {
         sass: {
            files: ['assets/**/*.scss'],
            tasks: ['sass'],
            options: {
              spawn: false,
          },
        },
        html: {
            files: ['index-dev.html'],
            tasks: ['env:dev', 'preprocess:task1', 'copy:indexPage'],
            options: {
              spawn: false,
          },
        }
      },

    
    //##PRODUCTION BUILD TASKS
   
  //minify Css files
   cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/assets/styles/main.min.css': ['assets/styles/main.css']
        }
      }
    },

   //rename files
   rename: {
      main: {
        files: [
             {src: ['dist/index-dev.html'], dest: 'dist/index.html'},
            ]
      }
    },


    // Precompile angular templates
    //
    //
    html2js: {
      options: {
        singleModule: true,
        base: './',
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      },
      main: {
        src: ['app/**/*.htm'],
        dest: 'tmp/templates.js'
      },
    },
    
     //
     // Bundle the require js files
     //
    requirejs: {
        compile: {
          options: {
            baseUrl: ".",
            mainConfigFile: "app/main.js",
            optimize: "uglify2",
            uglify2: {
              beautify: false,
              mangle: false
            },
            name: "app/main", // assumes a production build using almond
            out: "tmp/main.min.js",
            include: [],
            generateSourceMaps: true,
            preserveLicenseComments: false
        }
      }
    },
    
    //
    // Concat multiple files
    //
    concat: {
      options: {
        separator: ';\n',
      },
      prod: {
        src: [
          'app/require.js',
          'bower_components/angular/angular.min.js',
          'bower_components/angular-cookies/angular-cookies.min.js',
          'bower_components/angular-ui-router/release/angular-ui-router.min.js',
          'bower_components/angular-animate/angular-animate.min.js',
          'bower_components/angular-messages/angular-messages.min.js',
          'bower_components/angular-aria/angular-aria.min.js',
          'bower_components/angular-material/angular-material.min.js',
          'node_modules/jquery/dist/jquery.min.js',

          //Application files
          'tmp/main.min.js',
          'tmp/templates.js'
        ],
        dest: 'dist/app/main.min.js',
      },
    },
     cacheBust: {
        taskName: {
            options: {
                baseDir: './dist',
                assets: ['**/*.js', '**/*.css'],
                jsonOutput: false,                            // Output the original => new URLs to a JSON file
                jsonOutputFilename: 'grunt-cache-bust.json',
                queryString: false,
                createCopies: true,
                deleteOriginals:true
            },
            src: ['dist/*.html']
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-cache-bust');

  grunt.registerTask('cc', ['jshint']);

  grunt.registerTask('default', ['env:dev', 'preprocess:task1', 'copy:indexPage', 'sass', 'clean:dist', 'watch']);

  grunt.registerTask('prod', [
      'clean:dist', 
      'env:prod', 
      'preprocess:task1', 
      'rename',
      'sass',
      'cssmin',
      'requirejs',
      'html2js', 
      'concat:prod',
      'copy:assets',
      'copy:bower_components',
      'clean:tmp',
      'cacheBust'
   ]);

};
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        mangle: false
      },
      target: {
        files: {
             //jquery and tether are dependencies of bootstrap// 
            'src/public/dist/client.min.js': ['src/public/lib/jquery-3.1.1.js', 'src/public/lib/tether.js', 'src/public/lib/*.js']
        },
      }
    },

    cssmin: {
      dist: {
        files: {
          'src/public/dist/client.min.css': 'src/public/css/*.css'
        }
      },
    },

    jshint: {
      files:{
        // check all js files within directories and subdirectories and its sub... of /src folder
        src:  ['src/**/*.js']
      },
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          'src/public/**/*.js'
        ],
        additionalSuffixes: ['.js']
      }
    },

    nodemon: {
      dev: {
        script: 'src/index.js'
      }
    },

    watch: {
      scripts: {
        files: [
          'src/client/**/*.js',
        ],
        tasks: [
          'shell:webpack', 'uglify'
        ]
      },
      css: {
        files: 'src/public/css/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      prodServer: {
        options: {
          stdout: true,
          stderr: true
        },
        command: [
          'git --no-pager pull --rebase origin master',
          'npm install',
          'webpack',
          ].join('&&')
      },
      localServer: {
        options: {
          stdout: true,
          stderr: true
        },
        command: [
          'npm install',
          'webpack',
          ].join('&&')
      },
      webpack: {
        options: {
          stdout: true,
          stderr: true
        },
        command: [
          'webpack',
          ].join('&&')
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);
    grunt.task.run([ 'watch' ]);
  });

  grunt.registerTask('build', [
    'uglify', 'cssmin', 'jshint'
  ]);

  grunt.registerTask('prod', function(n) {
      grunt.task.run([ 'shell:prodServer' ]);
      grunt.task.run([ 'build' ]);
      grunt.task.run([ 'server' ]);
  });

  grunt.registerTask('local', function(n) {
      grunt.task.run([ 'shell:localServer' ]);
      grunt.task.run([ 'build' ]);
      grunt.task.run([ 'server' ]);
  });

};

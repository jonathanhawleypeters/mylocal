module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      dev: {
        script: 'src/index.js'
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      target: {
        files: {
            'src/public/dist/client.min.js': 'src/public/lib/*.js'
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
        src:  ['server/**/*.js', 'client/**/*.js', '*.js']
      },
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          'src/**/*.js'
        ]
      }
    },
 
    watch: {
      scripts: {
        files: [
          'src/public/lib/*.js',
        ],
        tasks: [
          'uglify'
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
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
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
    'uglify', 'cssmin' //, 'jshint'
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

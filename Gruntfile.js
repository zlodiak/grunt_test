module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    less: {
      all: {
        files: {
          'css/less.css': 'less/styles.less',
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', [
    'less',
  ]);

}

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

        watch: {
            scripts: {
              files: ['less/styles.less'],  // when file changes
              tasks: ['less'],            // will start task
              options: {
                spawn: false,
              },
            },
        },    

        // specifying the settings for css file minification
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'css',           // catalog source
              src: ['less.css'],    // filename
              dest: 'css',          // catalog destination
              ext: '.min.css'       //extension add 
            }]
          }
        } 
    });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', [
    'less',
    'watch',
    'cssmin'
  ]);

}
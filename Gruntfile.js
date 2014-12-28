module.exports = function(grunt) {
  'use strict'; // включить строгий режим

  // автоматически загружать задачи (хотя можно и вручную)
  require('load-grunt-tasks')(grunt);

  // во избежание «очепяток»
  // желательно определить директории разработки и деплоя
  var config = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    config: 'config',

    // дальше следует описание задач (см. ниже)
    less: {},
    uglify: {},
    watch: {}

  });

  // «загрузка» задач вручную
  grunt.loadNpmTasks('grunt-contrib-connect');
  // регистрация задач, default-задача должна быть обязательно
  grunt.registerTask('default', ['jshint']);
};
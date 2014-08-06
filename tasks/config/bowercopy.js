module.exports = function (grunt) {
  grunt.config.set('bowercopy', {
    options: {},
    dev: {
      options: {
        destPrefix: '.tmp/public',
      },
      files: {
        'js/jquery.js': 'jquery/dist/jquery.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-bowercopy');
};


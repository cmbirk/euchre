/**
 * Compiles SASS files into CSS
 * 
 */
module.exports = function (grunt) {
  grunt.config.set('sass', {
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/styles/',
        src: ['importer.scss'],
        dest: '.tmp/public/styles/',
        ext: '.css'
      }, {
        expand: true,
        cwd: 'assets/linker/styles',
        src: ['importer.scss'],
        dest: '.tmp/public/linker/styles/',
        ext: '.css'
      }
        ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
};
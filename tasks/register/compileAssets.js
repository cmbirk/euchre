module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
    'bowercopy:dev',
		'jst:dev',
		'less:dev',
    'sass:dev',
		'copy:dev',
		'coffee:dev'
	]);
};

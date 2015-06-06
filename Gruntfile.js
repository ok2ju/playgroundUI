module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: ['**/*.{scss,sass}'],
                tasks: ['sass']
            },
        },
        sass: {
            dist: {
                files: {
                    'css/style.css': 'partials/style.scss',
                    'css/landing.css': 'partials/landing.scss'
                }
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['sass','watch']);
};

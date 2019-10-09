module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8888,
                    base: '.',
                    livereload: true,
                    open: {
                        target: 'http://localhost:8888',
                      }
                    }
                }
            },
        watch: {
          css: {
            files: 'css/*.scss',
            tasks: ['sass']
          },
          reload: {
            options: {
                livereload: true
            },
            files: [
                "*.html",
                "css/*.css",
                "images/*.*"
              ]
          }
        },
        sass: {
            dist: {
                src: 'css/styles.scss',
                dest: 'css/styles.css'
            }
        }
		});

		grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-node-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.registerTask('default', ['connect', 'sass', 'watch']);
};

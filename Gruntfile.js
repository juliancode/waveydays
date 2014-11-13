module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({
    autoprefixer: {
    	options: {
 		browsers: ['last 2 versions']
		},
		no_dest: {
      	src: 'css\\style.css' // globbing is also possible here
    	},
    },

    watch: {
		options: {
	    	livereload: 9000,
	    },
	    sass: {
	    	files: ['C:\\wamp\\www\\flexy\\sass\\*.scss'],
	    	tasks: ['sass'],
	    },
	    prefixer: {
		    files: ['C:\\wamp\\www\\flexy\\css\\*.css'],
		    tasks: ['autoprefixer'],
	    },
	},

	sass: {
		dist: {
			files: {
				'css\\style.css': 'sass\\style.scss',
				'css\\test.css' : 'sass\\test.scss',
			}
		}
	},

	express: {
		all: {
			options: {
				port: 9000, 
				hostname: 'localhost',
				bases: ['C:\\wamp\\www\\flexy'],
				livereload: true,
			},
		},
  	},
});

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-autoprefixer');



  // Default task(s).
  grunt.registerTask('default', ['sass', 'autoprefixer'])
  grunt.registerTask('server', ['express', 'watch'])


};
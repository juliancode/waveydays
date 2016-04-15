module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({
    autoprefixer: {
    	options: {
 		browsers: ['last 2 versions']
		},
		no_dest: {
      	src: 'css/style.css' // globbing is also possible here
    	},
    },

	sass: {
		dist: {
			files: {
				'css/style.css': 'sass/style.scss',
				'css/test.css' : 'sass/test.scss',
			}
		}
	},

	watch: {
		options: {
	    	livereload: 1337,
	    },
	    sass: {
	    	files: ['C:/wamp/www/flexy/sass/*.scss'],
	    	tasks: ['sass'],
	    },
	    prefixer: {
		    files: ['C:/wamp/www/flexy/css/*.css'],
		    tasks: ['autoprefixer'],
	    },
	    jade: {
	    	files: ['C:/wamp/www/flexy/jade/*.jade'],
	    	tasks: ['jade'],
	    }
	},

	// jade: {
	// 	compile: {
	// 		options: {
	// 			pretty: true,
	// 			data: {
	// 				debug: true,
	// 			}
	// 		},
	// 		files: {
	// 			'C:/wamp/www/flexy/index.html': 'C:/wamp/www/flexy/jade/index.jade',
	// 			'C:/wamp/www/flexy/random.html': 'C:/wamp/www/flexy/jade/random.jade'
	// 		}
	// 	}
	// },

	express: {
		all: {
			options: {
				port: 1337, 
				hostname: 'localhost',
				bases: ['C:/wamp/www/flexy'],
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
  grunt.loadNpmTasks('grunt-contrib-jade');



  // Default task(s).
  grunt.registerTask('default', ['sass', 'autoprefixer', 'jade'])
  grunt.registerTask('server', ['express', 'watch'])


};
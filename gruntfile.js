// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function(grunt) {
 
  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  // Configure Grunt 
  grunt.initConfig({
 
  connect: {
    server: {
      options: {
        port: 9000,
        base: 'www',
         livereload: true
      }
    }
  },

 
    // grunt-watch will monitor the projects files
    watch: {
      all: {
        // Replace with whatever file you want to trigger the update from
        // Either as a String for a single entry 
        // or an Array of String for multiple entries
        // You can use globing patterns like `css/**/*.css`
        // See https://github.com/gruntjs/grunt-contrib-watch#files
        files: 'www/**/*',
        options: {
          livereload: true
        }
      }
    },
 
    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= connect.server.options.port%>'
      }
    }
  });
 
  // Creates the `server` task
  grunt.registerTask('serve', [
    'connect',
    'open',
    'watch'
  ]);
};
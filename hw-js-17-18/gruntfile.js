module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.min.js'
      }
    },
    uglify: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/dist/script.min.js'],
         dest: 'js/dist/script.min.js'
      }
    },
    cssmin: {
    target: {
      files: {
        'css/dist/style.min.css': ['css/src/style1.css', 'css/src/style2.css']
      }
    }
  }
});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  

  grunt.registerTask('default', ['concat' ,'uglify','cssmin']);

};
module.exports = function(grunt) {
  grunt.initConfig({

    less: {
      test: {
        options: {
          //compress: true,
        },

        files: {
          'base.css': 'base.less', 
        }
      }
    },

    watch: {
      styles: {
        files: ['base.less'],
        tasks: ['less'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['watch']);
};


module.exports = function (grunt) {
    
  grunt.loadNpmTasks('grunt-dart-sass');
  grunt.loadNpmTasks('grunt-svg-sprite');
  
  grunt.initConfig({
    'dart-sass': {
      target: {
        files: {
          'css/styleguide.css': 'src/scss/styleguide.scss',
          'css/styles-4-codepen.css': 'src/scss/styles-for-codepen.scss'
        }
      }
    },
    'svg_sprite': {
      'options': {
        svg: {
          xmlDeclaration : false,
          rootAttributes: { 
            "class": "svg-sprite"
          }
        }
      },
      'myTarget': {
        src : [ 'svg/**/*.svg' ],
        dest: '_includes',
        options: {
          mode: {
            inline: true,
            symbol: true
          }
        }
      }
    }
  });
  
  grunt.registerTask('build', ['dart-sass', 'svg_sprite']);
}

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'app/**/*.js',
      'node_modules/es6-promise/dist/es6-promise.js',
      'node_modules/whatwg-fetch/fetch.js',
      'node_modules/@babel/polyfill/dist/polyfill.js',
      'test/**/*Spec.js'
    ],

    browsers : ['PhantomJS'],

    plugins : [
        'karma-babel-preprocessor',
        'karma-growl-reporter',
        'karma-phantomjs-launcher',
        'karma-jasmine'
    ],

    exclude: [],

    preprocessors: {
        'app/**/*.js': ['babelSourceMap'],
        'test/**/*.js': ['babelSourceMap']
    },

    customPreprocessors: {
      babelSourceMap: {
          base: 'babel',
          options: {
              presets: ['@babel/preset-env'],
              sourceMap: 'inline'
          },
          filename: function (file) {
              return file.originalPath.replace(/\.js$/, '.es5.js');
          },
          sourceFileName: function (file) {
              return file.originalPath;
          }
      }
    },

    reporters: ['progress', 'growl'],

    port: 9876,

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false
  });
};

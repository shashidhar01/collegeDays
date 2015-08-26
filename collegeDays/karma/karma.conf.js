module.exports = function(config){
  config.set({
	/** 
     * From where to look for files, starting with the location of this file.
     */
    basePath : '../',
      preprocessors: {
		  '**/*.coffee': 'coffee',
          // source files, that you wanna generate coverage for
          // do not include tests or libraries
          // (these files will be instrumented by Istanbul)
          'src/**/*.js' :['coverage']
      },
    files : [
        'vendor/angular/angular.js',
        'vendor/angular-mocks/angular-mocks.js',
        'src/**/*.config.js',
        'src/**/*.controller.js',
        'src/**/*.services.js',
        'src/**/*.spec.js',
        'src/**/*.coffee'
    ],
	exclude: [
      'src/assets/**/*.js',
      'e2e-test/**/*.js'
    ],
    autoWatch : true,
    port : 9876,
	urlRoot: '/',
    colors : true,
    logLevel : config.LOG_INFO,
    frameworks: ['jasmine'],
    browsers : ['chrome', 'firefox', 'PhantomJS'],
    singleRun : false,
    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
			'karma-coffee-preprocessor'
    ],
    reporters: ['progress','coverage'],
    coverageReporter: {
         type : 'html', dir: 'target/coverage'
      },
      junitReporter : {
        outputFile: 'target/unit.xml',
        suite: 'unit'
      }
  });
};

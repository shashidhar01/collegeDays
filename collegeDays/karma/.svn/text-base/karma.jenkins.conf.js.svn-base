module.exports = function(config){
    config.set({
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
        // don't watch for file change
        autoWatch        : false,
        port             : 9876,
		urlRoot: '/',
        colors           : true,
        logLevel         : config.LOG_INFO,
        frameworks: ['jasmine'],
        // only runs on headless browser
        browsers : ['PhantomJS'],
        // just run one time
        singleRun : true,
        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
			'karma-coffee-preprocessor'
        ],
        reporters: ['progress', 'junit','coverage'],
        // changes type to `cobertura`
        coverageReporter: {
            type : 'cobertura',
            dir: 'target/coverage-reports'
        },
        // saves report at `target/surefire-reports/TEST-*.xml` because Jenkins
        // looks for this location and file prefix by default.
        junitReporter : {
            outputFile: 'target/surefire-reports/TEST-karma-results.xml',
            suite: 'unit'
        }
    });
};

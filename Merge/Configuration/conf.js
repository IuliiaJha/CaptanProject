let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
   
    directConnect : true,
  
   capabilities: { 
    browserName: 'chrome',
    chromeOptions: {
        args: ['incognito'] 
    },
     'shardTestFiles': true, 
     'maxInstances': 4
 },
//   specs: ['../Tests/*.spec.js'], 
// specs: ['../Tests/AnaraCart.spec.js'], 
suites :  {
// //       //smoke: ['../Tests/MenuSelectionTest.js', '../Tests/OrderingInfoPageTest.js', '../Tests/OrderingPageTest.js', '../Test/MainPageTest'],
// //       //smoke: ['../Tests/MenuSelectionTest.js',],
   regression:['../Tests/*.spec.js']
       },
 

onPrepare: function () {
    browser.driver.manage().window().setSize(1500,1000);
    jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true,
        showstack: false
      }));
      //// Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'report/screenshots',
        preserveDirectory: false,
        screenshotsSubfolder: 'images',
         jsonsSubfolder: 'jsons',
         docName: 'CyberBank-Report.html'
     }).getJasmine2Reporter());
  
},
    
    jasmineNodeOpts: {
        showColors: true, 
        defaultTimeoutInterval: 300000,    
        print: function() {}
        
}
};
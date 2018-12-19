require('../Utilities/CustomLocators.js');
var homePage = require('./Home.page.js');
var CateringPage=require('./Catering.page.js');

var RetrievePasswordPage = function(){
    this.headingRetrievePassword = $$('#heading_forgot').first();
    this.retrievePasswordPageLink = 'https://ebcatering.com/index.cfm?fuseaction=forgot';
    this.emailImputBox=$('#member_email');
    this.retrievePasswordBatton= element(by.buttonText('Retrieve Password'));
    this.errorMsgInvalidEmail=$('.formErrorContent')
}





    module.exports = new RetrievePasswordPage()
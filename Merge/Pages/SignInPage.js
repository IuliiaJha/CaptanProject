require('../Utilities/CustomLocators.js');
var firstPage = require('./MainPage.js'); 
var secondPage = require('./OrderingPage.js'); 
var OrderingInfoPage = require('./OrderingInfoPage.js'); 
var UserDataPage = require('../TestData/UserData.json');
var MenuSelectionPage = require('./MenuSelectionPage.js'); 

var SignInPage = function(){
    this.email = $('#signin_member_email'); 
    this.passw = $('#signin_member_password'); 
    this.rememberMe = $('#remember');
    this.signIn = $('#login_signin_submit');
}

module.exports=new SignInPage();
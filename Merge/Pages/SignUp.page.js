require('../Utilities/CustomLocators.js');
var homePage = require('./Home.page.js')
var CateringPage=require('./Catering.page.js')

var SignUpPage = function(){
    this.signUpPageLink='https://ebcatering.com/index.cfm?fuseaction=signup';
    this.signUpFirstName=$('#signup_member_fname');
    this.signUpLastName=$('#signup_member_lname');
    this.signUpEmail=$('#signup_member_email');
    this.signUpPassword=$('#signup_password');
    this.signUpLoginButton=$('#login_signup_submit');
    this.errorMsgPassword=element(by.css('.signup_passwordformError.parentFormlogin_signup.formError>:nth-child(1)'));
    this.errorMsgPasswordEmailRegistreted=element(by.css('.signup_member_emailformError.parentFormlogin_signup.formError>:nth-child(1)'))

}




 module.exports= new SignUpPage ()
require('../Utilities/CustomLocators.js');
var homePage = require('./Home.page.js')
var CateringPage=require('./Catering.page.js')

var SignInPage = function(){

    this.signInEmail=$('#signin_member_email');
    this.signInPassword=$('#signin_member_password');
    this.signInLoginButton=$('#login_signin_submit')
    this.errorPopUpPasswordBlank=element(by.className('c-form-item__field js-label-float validate[minSize[8]]'))
    this.errorPopUpMinSizePassword=element(by.className('c-form-item__field js-label-float validate[minSize[8]]'))
    this.errorMsgMinSizePassword=element(by.css('.signin_member_passwordformError.parentFormlogin_signin.formError > div.formErrorContent'))
    this.errorPopUpInvalidSignIn= element(by.className('cc-form-item__field.js-label-float.validate[minSize[8]].is-active'))
    this.errorMsgInvalidSignIn=element(by.css('.signin_member_emailformError.parentFormlogin_signin.formError>:nth-child(1)'))
    this.rememberMeCheckBox=$('#remember')
    this.maxAttempPopUpClose= $('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-icon-only.ui-dialog-titlebar-close')
    this.errorMsgmaxAttempPopUp=element(by.css('#dialog > p'));
    this.retrievePassword=element(by.linkText("Retrieve password"));
    this.signUpLink=element(by.linkText('Sign Up'))
}

 module.exports= new SignInPage ()
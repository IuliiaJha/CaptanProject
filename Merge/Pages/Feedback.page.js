var FeedbackPage= function(){
    this. formLabel= element.all(by.className('frm-required col-sm-2'));
    this. firstNameInputBox= element(by.id('fname'));
    this. lastNameInputBox= element(by.id('lname'));
    this. emailInputBox= element(by.model('feedback.email'));
    this. phoneInputBox= element(by.model('feedback.phone'));
    this. leftFormLabel= element.all(by.className('frm-required label-control col-sm-12'));
    this. locationInputBox= element(by.model('feedback.location'));
    this. natureOfContactInputBox= element(by.model('feedback.nature'));
    this. commentsInputBox= element(by.model('feedback.comments'));
    this. submitButton= element(by.className('btn-yellow'));
    this.formRequiredField= element.all(by.css('input:required'));




}

module.exports= new FeedbackPage();




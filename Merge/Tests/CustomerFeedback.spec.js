
var FeedbackPage = require('../Pages/Feedback.page.js');
var HomePage= require('../Pages/Home.page.js');
var CustomerData= require('../TestData/CustomerData.json')

describe('Feedback form',()=>{
    beforeEach(()=>{
        browser.get('https://www.einsteinbros.com/feedback');
        // browser.executeScript("window.scrollTo(100,240)")
    });
       
    it('Should get the title of customer feedback page', () => {
        expect(browser.getTitle()).toEqual(CustomerData.rightBoxInfo.customerFeedbackTitle);
        browser.sleep(3000);
    });
    it('Should have displayed the FirstName', () => {
         expect(FeedbackPage.formLabel.get(0).getText()).toEqual(CustomerData.customerFeedbackFormData.firstNameText);
         expect(FeedbackPage.firstNameInputBox.getAttribute('placeholder')).toEqual(CustomerData.customerFeedbackFormData.firstNameText);

          
    });
    it('Should have displayed the LastName', () => {
        expect(FeedbackPage.formLabel.get(1).getText()).toEqual(CustomerData.customerFeedbackFormData.lastNameText);
        expect(FeedbackPage.lastNameInputBox.getAttribute('placeholder')).toEqual(CustomerData.customerFeedbackFormData.lastNameText);
         
    });
    it('Should have displayed the Email', () => {
       expect(FeedbackPage.formLabel.get(2).getText()).toEqual(CustomerData.customerFeedbackFormData.emailText);
       expect(FeedbackPage.emailInputBox.getAttribute('placeholder')).toEqual(CustomerData.customerFeedbackFormData.emailText);
     
    });
    it('Should have displayed the Phone', () => {
        expect(FeedbackPage.formLabel.get(3).getText()).toEqual(CustomerData.customerFeedbackFormData.phoneText);
        expect(FeedbackPage.phoneInputBox.getAttribute('placeholder')).toEqual('Phone Number')
      
    });
    it('Should have displayed the location', () => {
        expect(FeedbackPage.leftFormLabel.get(0).getText()).toEqual(CustomerData.customerFeedbackFormData.locationText);
        expect(FeedbackPage.locationInputBox.getAttribute('placeholder')).toEqual('Location')
      
    });
    it('Should have displayed the dropdown and Count', () => {
        expect(FeedbackPage.leftFormLabel.get(1).getText()).toEqual(CustomerData.customerFeedbackFormData.dropdownText);
        FeedbackPage.natureOfContactInputBox.click();
        expect(FeedbackPage.natureOfContactInputBox.all(by.tagName('option')).count()).toEqual(8)
         
        
      
    });
    it('Should have displayed the dropdown correctlly', () => {
        expect(FeedbackPage.leftFormLabel.get(1).getText()).toEqual(CustomerData.customerFeedbackFormData.dropdownText);
        FeedbackPage.natureOfContactInputBox.click();
        
        FeedbackPage.natureOfContactInputBox.all(by.tagName('option')).getText().then(function(expectedList){
            console.log(expectedList)
         

        for (let i = 0; i < expectedList.length; i++) {
            expect(expectedList[i]).toEqual(CustomerData.dropdownActualList.actualList[i]);
            
        }
        
        
        //expect(tempAccList[2]).toEqual('Complaint');
        
        //  if(JSON.stringify(expectedList)===JSON.stringify(CustomerData.dropdownActualList.actualList)){
        //      console.log('They are equal')
        //  }
        //  else{
        //      console.log('Not equal')
        //  }
        });

        
        
        
      
    });
    it('Should inspect the comments label', () => {
        expect(FeedbackPage.leftFormLabel.get(2).getText()).toEqual(CustomerData.customerFeedbackFormData.commentsText);
        expect(FeedbackPage.commentsInputBox.getAttribute('placeholder')).toEqual(CustomerData.customerFeedbackFormData.commentsText);
    });
    it('Should inspect submit button', () => {
        expect(FeedbackPage.submitButton.isDisplayed()).toBe(true)
        FeedbackPage.submitButton.click()
    });
    it('Should require first name', () => {
        expect(FeedbackPage.formRequiredField.get(0).getAttribute('required')).toBe('true')
       
    });
    it('Should not type numbers in First Name field', () => {
        expect(FeedbackPage.firstNameInputBox.sendKeys('12345')).toBeNull('12345')
    });
    it('Should require last name', () => {
        expect(FeedbackPage.formRequiredField.get(1).getAttribute('required')).toBe('true')
    });
    it('Should not type numbers in Last Name field', () => {
        expect(FeedbackPage.lastNameInputBox.sendKeys('12345')).toBeNull('12345')
    });
    it('Should require Email', () => {
        expect(FeedbackPage.formRequiredField.get(2).getAttribute('required')).toBe('true')
    });
    it('Should not type numbers in Email field', () => {
        expect(FeedbackPage.emailInputBox.sendKeys('12345')).toBeNull('12345')
    });
    it('Should not leave Phone field blank', () => {
        expect(FeedbackPage.formRequiredField.get(3).getAttribute('required')).toBe('true')
    });
    it('Should not type letters in phone field', () => {
        expect(FeedbackPage.phoneInputBox.sendKeys('abcde')).toBeNull('abcde')
    });
    it('Should not leave location blank', () => {
        expect(FeedbackPage.formRequiredField.get(4).getAttribute('required')).toBe('true')
    });
    it('Should not type numbers in in location field', () => {
        expect(FeedbackPage.locationInputBox.sendKeys('12345')).toBeNull('12345')
    });
    it('Should successfully submit your feedback', () => {
        FeedbackPage.firstNameInputBox.sendKeys(CustomerData.customerFeedbackSubmitData.firstName)
        FeedbackPage.lastNameInputBox.sendKeys(CustomerData.customerFeedbackSubmitData.lastName)
        FeedbackPage.emailInputBox.sendKeys(CustomerData.customerFeedbackSubmitData.email)
        FeedbackPage.phoneInputBox.sendKeys(CustomerData.customerFeedbackSubmitData.phone)
        FeedbackPage.locationInputBox.sendKeys(CustomerData.customerFeedbackSubmitData.location)
        FeedbackPage.natureOfContactInputBox.all(by.tagName('option')).get(1).click();
        element(by.model('feedback.category')).all(by.tagName('option')).get(5).click();
        FeedbackPage.commentsInputBox.sendKeys(CustomerData.customerFeedbackSubmitData.comments);
        FeedbackPage.submitButton.click();
        browser.sleep(1000)
        expect(element(by.className('thank-you')).isDisplayed()).toBe(true)
    });

    


});
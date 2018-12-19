var Base= require('../Utilities/Base.js');
var ContactPage= require('../Pages/Contact.page.js');
var HomePage=require('../Pages/Home.page.js');
var CustomerData=require('../TestData/CustomerData.json');

describe('Check the contact', () => {
    beforeEach(function(){
        // browser.get('https://www.einsteinbros.com/contact')
        Base.navigateToHome();
        HomePage.headerLinks.get(1).click();

    });

  
    it('Should inspect the right box', () => {
        expect(ContactPage.leftBox.isDisplayed()).toBe(true);
        
    });
    it('Should inspect how many links are displayed', () => {
        expect(ContactPage.leftBoxLinks.count()).toEqual(4);
    });
    it('Should check if Customer Feedback link is displayed and clickable', () => {
        expect(ContactPage.leftBoxLinks.get(0).getText()).toEqual(CustomerData.rightBoxInfo.customerFeedbackLink);
        ContactPage.leftBoxLinks.get(0).click();
        expect(browser.getTitle()).toEqual(CustomerData.rightBoxInfo.customerFeedbackTitle);
       
    });
    it('Should check if FAQs link is displayed and clickable', () => {
        expect(ContactPage.leftBoxLinks.get(1).getText()).toEqual(CustomerData.rightBoxInfo.FAQsLink);
        ContactPage.leftBoxLinks.get(1).click();
        expect(browser.getTitle()).toEqual(CustomerData.rightBoxInfo.FAQsTitle);
        
    });
    it('Should check if Contact Information link is displayed and clickable', () => {
        expect(ContactPage.leftBoxLinks.get(2).getText()).toEqual(CustomerData.rightBoxInfo.ContactInfoLink)
        ContactPage.leftBoxLinks.get(2).click();
        browser.sleep(3000);
        expect(browser.getTitle()).toEqual(CustomerData.rightBoxInfo.contactInfoTitle)
        
    });
    it('Should check if Employment link is displayed and clickable', () => {
        expect(ContactPage.leftBoxLinks.get(3).getText()).toEqual(CustomerData.rightBoxInfo.employmentLink);
        ContactPage.leftBoxLinks.get(3).click();
        
    });
    it('Should check if the address is matching', () => {
        browser.executeScript("window.scrollBy(0,1200)");
        ContactPage.supportCenterAdress.first().getText().then(function(adress){

         var result= adress.substring(adress.indexOf('\n')+ 1);
         console.log(result)
          
         var actualResult=(CustomerData.contactData.adress);
         console.log(actualResult)
         if(result==actualResult){
            console.log('They are equal')
        }
        else{
            console.log('Not equal')
        }
       });
    

    //    expect(ContactPage.supportCenterAdress.first().getText()).toContain("555 Zang Street, Suite 300");
    //    browser.sleep(1000)
    //    expect(ContactPage.supportCenterAdress.first().getText()).toContain("Corporate Support Center")
    //    browser.sleep(1000)
    //    expect(ContactPage.supportCenterAdress.first().getText()).toContain("Lakewood, CO 80228")
    //    browser.sleep(1000)

    

        
        
    });
  
    it('Should match catering Email', () => {
        expect(ContactPage.cateringLink.isDisplayed()).toBe(true);
        expect(ContactPage.cateringLink.getText()).toEqual(CustomerData.contactData.cateringLink);
    
    });
    it('Should match the Phone number', () => {
        expect(ContactPage.phoneNumber.isDisplayed()).toBe(true);
        expect(ContactPage.phoneNumber.getText()).toEqual(CustomerData.contactData.phoneNumber);
           
    });
    
    it('Should navigate to guest experience survey', () => {
        expect(ContactPage.linkToPage.first().isDisplayed()).toBe(true);
        expect(ContactPage.linkToPage.first().click());
        browser.getCurrentUrl().then(function(title){
            console.log(title)
        })
        browser.sleep(3000);
    
    });
    it('Should navigate to customer feedback page', () => {
        expect(ContactPage.linkToPage.last().isDisplayed()).toBe(true);
        expect(ContactPage.linkToPage.last().click())
        browser.sleep(3000);
        expect(browser.getTitle()).toEqual(CustomerData.rightBoxInfo.customerFeedbackTitle)
    
    });

});
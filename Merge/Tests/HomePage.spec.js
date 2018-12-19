var HomePage=require('../Pages/Home.page.js');
var Base=require('../Utilities/Base.js');

describe('Home Page', () => {
    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        Base.navigateToHome();
    });

  
describe("Verify Home Page Header", ()=>{


it('should verify current URL', ()=>{
  expect(browser.getCurrentUrl()).toEqual("https://www.einsteinbros.com/");
});
it('should verify the correct Title', ()=>{
    expect(browser.getTitle()).toEqual("Einstein Bros. Bagels – Your Neighborhood Bagel Shop");
});
it('should Verify the LOGO', ()=>{
    expect(HomePage.homeLogo.isDisplayed()).toBe(true);
});
it('should Verify the “FIND A STORE” link is Displayed' ,()=>{
expect(HomePage.FindaStoreLink.isDisplayed()).toBe(true);
Base.navigateToHome()

});
it('should Verify the “FIND A STORE” link is clickable', ()=>{
    HomePage.FindaStoreLink.click();
    expect(browser.getTitle()).toEqual('Find an Einstein Bros. near you | Bagels, Coffee, Breakfast');
});
it('should Verify the “MENU” link is Displayed' ,()=>{
    expect(HomePage.menuLink.isDisplayed()).toBe(true);
    });
it('should Verify the “MENU” link is clickable', ()=>{
    HomePage.menuLink.click();
    expect(browser.getTitle()).toEqual('Einstein Bros. Bagels | New on Our Menu');
    });
it('should Verify the “SHMEAR SOCIETY” link is Displayed' ,()=>{
    expect(HomePage.shmearSocietyLink.isDisplayed()).toBe(true);
    });
it('should Verify the “SHMEAR SOCIETY” link is clickable', ()=>{
    HomePage.shmearSocietyLink.click();
    expect(browser.getTitle()).toEqual('Shmear Society Rewards | Einstein Bros. Bagels');
    });
it('should Verify the “CATERING” link is Displayed' ,()=>{
    expect(HomePage.cateringLink.isDisplayed()).toBe(true);
    });

it('should Verify the “GOOD FOOD FIGHT” link is Displayed' ,()=>{
    expect(HomePage.goodFoodFightLink.isDisplayed()).toBe(true);
    });
it('should Verify the “GOOD FOOD FIGHT” link is clickable', ()=>{
    HomePage.goodFoodFightLink.click();
    expect(browser.getTitle()).toEqual('Einstein Bros. Bagels | Fighting the Good-Food Fight');
    });
it('should verify  header links on Right side ', ()=>{
    expect(HomePage.headerLinks.get(0).isDisplayed()).toBe(true);
    expect(HomePage.headerLinks.get(1).isDisplayed()).toBe(true);
    expect(HomePage.headerLinks.get(2).isDisplayed()).toBe(true);
    expect(HomePage.headerLinks.get(3).isDisplayed()).toBe(true);
})
it('should verify  Social links on Right side', ()=>{
    expect(HomePage.socialLinks.get(0).isDisplayed()).toBe(true);
    expect(HomePage.socialLinks.get(1).isDisplayed()).toBe(true);
    expect(HomePage.socialLinks.get(2).isDisplayed()).toBe(true);
    expect(HomePage.socialLinks.get(3).isDisplayed()).toBe(true);
});
            
});

describe('Main images in the middle', ()=>{
    var EC = protractor.ExpectedConditions;
    beforeEach(function(){
    
   browser.executeScript('window.scrollTo(0,600)');
    }); 
it("should verify first image's context", ()=>{
browser.wait(EC.visibilityOf(HomePage.mainImages.get(0)),14000).then(function(){
expect(HomePage.mainImages.get(0).isPresent()).toBe(true);
expect(HomePage.mainImages.get(0).getAttribute('alt')).toEqual('Shmear Society');
expect(HomePage.textInImages.get(0).getText())
.toEqual('Join today and get a Free Bagel & Shmear for signing up and a Free Egg Sandwich on your birthday.')
})
});

it('should verify the SIGN UP link in Shmear Society image', ()=>{
browser.wait(EC.visibilityOf(HomePage.mainImages.get(0)),14000).then(function(){
HomePage.SignUpButton.click();
browser.getAllWindowHandles().then(function(handles){
    browserHandles=handles;
    browser.switchTo().window(browserHandles[1]).then(function(){
     browser.sleep(3000);
expect(browser.getCurrentUrl()).toContain('/join');
    });
    browser.switchTo().window(browserHandles[0]);
    });
  
});
});
it("should verify second image's context", ()=>{
    browser.wait(EC.visibilityOf(HomePage.mainImages.get(1)),14000).then(function(){
    expect(HomePage.mainImages.get(1).isPresent()).toBe(true);
    expect(HomePage.mainImages.get(1).getAttribute('alt')).toEqual('Catering');
    expect(HomePage.textInImages.get(1).getText())
    .toEqual('We cater breakfast and lunch for you and your crew. It’s happiness delivered right to you.')
    })
    });
it('should verify the Learn More link in Catering image', ()=>{
browser.wait(EC.visibilityOf(HomePage.mainImages.get(1)),14000).then(function(){
HomePage.LearnMoreLinks.first().click();
browser.getAllWindowHandles().then(function(handles){
browserHandles=handles;
browser.switchTo().window(browserHandles[2]).then(function(){
browser.sleep(3000);
expect(browser.getCurrentUrl()).toEqual('https://ebcatering.com/');
            });
browser.switchTo().window(browserHandles[0]);
            });
          
});
});
it("should verify third image's context", ()=>{
browser.wait(EC.visibilityOf(HomePage.mainImages.get(2)),14000).then(function(){
expect(HomePage.mainImages.get(2).isPresent()).toBe(true);
expect(HomePage.mainImages.get(2).getAttribute('alt')).toEqual('Coffee and Bagels');
expect(HomePage.textInImages.get(2).getText()).toEqual("Caribou Coffee and Einstein Bros. Bagels are coming together under one epic roof.")
});
});
it('should verify the Learn More link in Coffee and Bagels image', ()=>{
browser.wait(EC.visibilityOf(HomePage.mainImages.get(2)),14000).then(function(){
HomePage.LearnMoreLinks.last().click();
browser.getAllWindowHandles().then(function(handles){
browserHandles=handles;
browser.switchTo().window(browserHandles[3]).then(function(){
browser.sleep(3000);
expect(browser.getCurrentUrl()).toContain('/cariboucoffee');
});
});                 
});
}); 
it('should check the images link on left Side "BagelHero', ()=>{
    browser.wait(EC.visibilityOf(HomePage.imagesLinks.get(0)),14000).then(function(){
    HomePage.imagesLinks.get(0).click();
    browser.getAllWindowHandles().then(function(handles){
        browserHandles=handles;
        browser.switchTo().window(browserHandles[4]).then(function(){
        browser.sleep(3000);
        expect(browser.getCurrentUrl()).toContain('/bagelhero');
        });
        browser.switchTo().window(browserHandles[0]);
        });  
});      
});


it('should check the images link on right Side Fighting the Good food', ()=>{
    browser.wait(EC.visibilityOf(HomePage.imagesLinks.get(1)),14000).then(function(){
    HomePage.imagesLinks.get(1).click();
    browser.getAllWindowHandles().then(function(handles){
       
        browserHandles=handles;
        browser.switchTo().window(browserHandles[5]).then(function(){
        browser.sleep(3000);
        expect(browser.getCurrentUrl()).toContain('/clean');
        });
        browser.switchTo().window(browserHandles[0]);
        });  
});      
});
});
describe('should verify Slide show part', ()=>{
    it('should clickOn First Slide on the HomePage and Verify img. source', () => {
        browser.sleep(2000);
        HomePage.FirstSlide.click()
        expect(HomePage.img1Src.isDisplayed()).toBe(true)
        });
    
    it('should clickOn Second Slide on the HomePage and Verify img. source', () => {
        browser.sleep(3000);
        HomePage.SecondSlide.click()
        expect(HomePage.img2Src.isDisplayed()).toBe(true)
        });
    
    it('should clickOn Third Slide on the HomePage and Verify img. source', () => {
            browser.sleep(2000);
            HomePage.ThirdSlide.click()
            expect(HomePage.img3Src.isDisplayed()).toBe(true)
            });
            


});
describe('should verify footer part', ()=>{
    it('should display Main Menu', () => {
        expect(HomePage.MainMenu.isDisplayed()).toBe(true);
        expect(HomePage.MainMenu.getText()).toEqual('MAIN MENU');
    });

    it('should dicplay Catering Menu', () => {
        expect(HomePage.CateringMenu.isDisplayed()).toBe(true);
        expect(HomePage.CateringMenu.getText()).toEqual('CATERING MENU');
    });

    it('should dicplay OUR FOOD', () => {
        expect(HomePage.OURFOOD.isDisplayed()).toBe(true);
        expect(HomePage.OURFOOD.getText()).toEqual('OUR FOOD');
    });

    it('should dicplay ABOUT US', () => {
        expect(HomePage.ABOUTUS.isDisplayed()).toBe(true);
        expect(HomePage.ABOUTUS.getText()).toEqual('ABOUT US');
    })

    it('should dicplay CAREERS', () => {
        expect(HomePage.CAREERS.isDisplayed()).toBe(true);
        expect(HomePage.CAREERS.getText()).toEqual('CAREERS');
    });

    it('should dicplay Contact Us', () => {
        expect(HomePage.ContactUs.isDisplayed()).toBe(true);
        expect(HomePage.ContactUs.getText()).toEqual('CONTACT US');
    })

    it('should dicplay FAQS', () => {
        expect(HomePage.FAQS.isDisplayed()).toBe(true);
        expect(HomePage.FAQS.getText()).toEqual('FAQS');  
    });

    it('should dicplay PRIVACY POLICY', () => {
        expect(HomePage.PRIVACYPOLICY.isDisplayed()).toBe(true);
        expect(HomePage.PRIVACYPOLICY.getText()).toEqual('PRIVACY POLICY');
    });

    it('should dicplay TERMS OF USE', () => {
        expect(HomePage.TERMSOFUSE.isDisplayed()).toBe(true);
        expect(HomePage.TERMSOFUSE.getText()).toEqual('TERMS OF USE');
    });

    it('should dicplay ADA COMPLIANCE', () => {
        expect(HomePage.ADACOMPLIANCE.isDisplayed()).toBe(true);
        expect(HomePage.ADACOMPLIANCE.getText()).toEqual('ADA COMPLIANCE');
    });

    it('should get Main Menu URL', () => {
        HomePage.MainMenuURL.click();
        browser.getCurrentUrl().then(function(siteUrl){
            console.log(siteUrl)
        });
    });

    it('should get Catering Menu URL', () => {
        HomePage.CateringMenuURL.click();
        browser.getCurrentUrl().then(function(siteUrl){
            console.log(siteUrl)
        });
    });

    it('should get OUR FOOD URL', () => {
        HomePage.OURFOODURL.click();
        browser.getCurrentUrl().then(function(siteUrl){
            console.log(siteUrl)
        });
    });

    it('should get ABOUT US URL', () => {
        HomePage.ABOUTUSURL.click();
        browser.getCurrentUrl().then(function(siteUrl){
            console.log(siteUrl)
        });
    })

    it('should get CAREERS URL', () => {
        browser.waitForAngularEnabled(false);
        HomePage.CAREERSURL.click();
        browser.getCurrentUrl().then(function(siteUrl){
            console.log(siteUrl)
        });
    });

    it('should get Contact Us URL', () => {
        HomePage.ContactUsURL.click();
        browser.getCurrentUrl().then(function(siteUrl){
            console.log(siteUrl)
        });
    })

    it('should get FAQS URL', () => {
        HomePage.FAQSURL.click();  
        browser.getCurrentUrl().then(function(siteUrl){
            console.log(siteUrl)
        });
    });
    it('find all the HomePage URL', () => {
        var HomePageUrl=[HomePage.OURFOODURL,HomePage.ABOUTUSURL,HomePage.CAREERSURL,HomePage.ContactUsURL,HomePage.CateringMenuURL,HomePage.FAQSURL,HomePage.MainMenuURL]
        
        for (var i=0; i<=6; i++){
            browser.waitForAngularEnabled(false);
            browser.get('https://www.einsteinbros.com/')
            browser.sleep(3000)
            HomePageUrl[i].click();
            if(i==4){
                browser.getAllWindowHandles().then(function(handles){
                    browserHandles = handles 
                    browser.switchTo().window(browserHandles[1]).then(function(){
                        browser.sleep(3000) 
                        browser.getCurrentUrl().then(function(siteUrl){
                            console.log(siteUrl)
                        browser.close().then(function(){browser.switchTo().window(browserHandles[0])
                    })
                    
                }) 

            })
        })
            }else{
                browser.getCurrentUrl().then(function(siteUrl){
                    console.log(siteUrl)
                browser.sleep(3000)
                    
                })
            }
            
        }
        
    });
})




});
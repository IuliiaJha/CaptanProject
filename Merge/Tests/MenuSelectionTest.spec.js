require('../Utilities/CustomLocators.js');
var Base = require('../Utilities/Base.js'); 
var MainPage =  require('../Pages/MainPage.js');   
var OrderingPage = require('../Pages/OrderingPage.js'); 
var OrderingInfoPage = require('../Pages/OrderingInfoPage.js');
var MenuSelectionPage = require('../Pages/MenuSelectionPage.js');
var UserDataPage = require('../TestData/UserData.json');
var SignInPage = require('../Pages/SignInPage.js');

describe ("Making an Order", ()=>{  
    
    beforeAll( ()=> { 
      browser.waitForAngularEnabled(false);
      Base.navigateToHome();
      browser.sleep(3000); 
      MainPage.cateringTab.click();
      browser.sleep(2000); 
      browser.getAllWindowHandles().then(function(handles){
      browserHandles=handles;
      browser.switchTo().window(browserHandles[1]).then(function(){
          });    
     
  });


      OrderingPage.orderingTab.click(); 
      browser.sleep(3000); 
      MenuSelectionPage.customerInfo(); 
      
      
    });
   
    it ('User should select a menu on the page and should also select the number of menus. Should complete the order ', ()=>{ 
        expect($('.c-menu-categories__item---all-day-breakfast > div > a > img').isDisplayed()).toBe(true);
        browser.sleep(2000); 
        browser.actions().mouseMove($('.c-menu-categories__item---all-day-breakfast > div > a > img')).click().perform();    
        browser.actions().mouseMove(MenuSelectionPage.menuSection1).click().perform();  
        browser.sleep(1000);
        browser.actions().mouseMove(MenuSelectionPage.menuSection2).click().perform();  
        browser.sleep(1000);
        browser.actions().mouseMove(MenuSelectionPage.menuSection3).click().perform(); 
        browser.sleep(1000);
        browser.actions().mouseMove(MenuSelectionPage.menuSection4).click().perform(); 
        browser.sleep(1000);
        browser.actions().mouseMove(MenuSelectionPage.menuSection2).click().perform();  
        browser.sleep(1000);
        MenuSelectionPage.chooseMenu.click();  
        browser.sleep(1000);
        MenuSelectionPage.selectMenu.click(); 
        browser.sleep(2000);
        MenuSelectionPage.increaseNoOfMenu.sendKeys("2"); 
        browser.sleep(2000);       
        MenuSelectionPage.submit.click(); 
        browser.sleep(2000);
        MenuSelectionPage.noOfSand.clear(); 
        browser.sleep(2000);
        MenuSelectionPage.noOfSand.sendKeys("15"); 
        browser.sleep(2000);
        MenuSelectionPage.noOfSand2.clear(); 
        browser.sleep(2000);
        MenuSelectionPage.noOfSand2.sendKeys("9"); 
        browser.sleep(2000);
        browser.actions().mouseMove(MenuSelectionPage.order).click().perform(); 
        browser.sleep(2000);
        browser.actions().mouseMove(MenuSelectionPage.scroll).click().perform(); 
        browser.sleep(1000);
        MenuSelectionPage.chooseMenu2.click();  
        browser.sleep(1000);
        MenuSelectionPage.selectMenu2.click(); 
        browser.sleep(2000);
        MenuSelectionPage.increaseNoOfMenu2.sendKeys("3"); 
        browser.sleep(2000);
        
     
        MenuSelectionPage.submit2.click(); 
        browser.sleep(2000);
        //browser.actions().mouseMove(MenuSelectionPage.scroll3).click().perform(); 
       // browser.sleep(2000);
        //browser.actions().mouseMove(MenuSelectionPage.scroll4).click().perform(); 
        //browser.sleep(2000);
        MenuSelectionPage.detailsButton.click(); 
        browser.sleep(2000);
        MenuSelectionPage.detailsLink.click(); 
        browser.sleep(2000);
        MenuSelectionPage.numpeople; 
        MenuSelectionPage.numpeople.clear(); 
        browser.sleep(2000);
        MenuSelectionPage.numpeople.sendKeys('50'); 
        browser.sleep(2000);
        browser.actions().mouseMove(MenuSelectionPage.checkOut2).click().perform(); 
        browser.sleep(5000);    
        browser.get('https://ebcatering.com/?fuseaction=signin');
        SignInPage.email.sendKeys(UserDataPage.customerInfo[0].mail); 
        browser.sleep(1000); 
        SignInPage.passw.sendKeys(UserDataPage.customerInfo[0].pw); 
        browser.sleep(1000); 
        SignInPage.rememberMe.click(); 
        browser.sleep(1000); 
        browser.actions().mouseMove(SignInPage.signIn).click().perform();  
        browser.sleep(4000); 
        MenuSelectionPage.cartIcon.click(); 
        browser.sleep(4000); 
        
    });
});
require('../Utilities/CustomLocators.js');
     var Base = require('../Utilities/Base.js'); 
     var MainPage =  require('../Pages/MainPage.js');     
     var OrderingPage = require('../Pages/OrderingPage.js'); 
   
  
    describe ("Making an Order", ()=>{  
    

    beforeEach( ()=> { 
      browser.waitForAngularEnabled(false); 
      Base.navigateToHome();
       
      
    })

    

    it("CATERING link should be visible and clickable",() => { 
        expect(MainPage.cateringTab.isDisplayed()).toBe(true); 
        expect(MainPage.cateringTab.getText()).toEqual("Catering"); 
        MainPage.cateringTab.click(); 
         
    
   }); 

   it (" User should be directed to https://ebcatering.com/ ", ()=>{             
        MainPage.cateringTab.click(); 
        browser.getAllWindowHandles().then(function(handles){
        browserHandles=handles;
        browser.switchTo().window(browserHandles[1]).then(function(){
        });    
    
  });
  
        browser.sleep(3000);
        expect(browser.driver.getCurrentUrl()).toContain('https://ebcatering.com/');              
        expect(browser.getCurrentUrl()).toEqual("https://ebcatering.com/"); 
        browser.sleep(2000); 


 

})

}); 
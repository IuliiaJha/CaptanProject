require('../Utilities/CustomLocators.js');
var Base = require('../Utilities/Base.js'); 
var MainPage =  require('../Pages/MainPage.js');   
var OrderingPage = require('../Pages/OrderingPage.js'); 

describe ("Making an Order", ()=>{  
    

    beforeEach( ()=> { 
      browser.waitForAngularEnabled(false); 
      Base.navigateToHome();
      MainPage.cateringTab.click();
      browser.getAllWindowHandles().then(function(handles){
      browserHandles=handles;
      browser.switchTo().window(browserHandles[1]).then(function(){
      });    
  
});

      browser.sleep(3000);
           
    }); 

  
    it(" 'Place new order' tab should be visible and clickable", ()=>{ 
      expect(OrderingPage.orderingTab.isDisplayed()).toBe(true); 
      browser.sleep(3000);
      expect(OrderingPage.orderingTab.getText()).toEqual("Place New Order"); 
      OrderingPage.orderingTab.click(); 
    
    }); 

    it(" 'Delivery' and 'Pick-up' ordering types should be visible and clickable", () =>{ 
        expect(OrderingPage.orderingTab.isDisplayed()).toBe(true); 
        
        expect(OrderingPage.orderingTab.getText()).toEqual("Place New Order"); 
        OrderingPage.orderingTab.click(); 
        browser.sleep(3000);
        expect(OrderingPage.deliveryButton.isDisplayed()).toBe(true); 
        expect(OrderingPage.pickupButton.isDisplayed()).toBe(true); 
        
        expect(OrderingPage.deliveryButton.getText()).toEqual("DELIVERY"); 
        expect(OrderingPage.pickupButton.getText()).toEqual("PICK UP");
        browser.sleep(3000);
        OrderingPage.deliveryButton.click(); 
        browser.sleep(3000); 
        OrderingPage.pickupButton.click(); 
        browser.sleep(2000); 

    })
})
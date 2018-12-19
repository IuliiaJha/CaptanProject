require('../Utilities/CustomLocators.js');
var Base = require('../Utilities/Base.js'); 
var MainPage =  require('../Pages/MainPage.js');   
var OrderingPage = require('../Pages/OrderingPage.js'); 
var OrderingInfoPage = require('../Pages/OrderingInfoPage.js');
var UserDataPage = require('../TestData/UserData.json');

describe ("Making an Order", ()=>{  
    

    beforeAll( ()=> { 
      browser.waitForAngularEnabled(false); 
      
      Base.navigateToHome();
      browser.sleep(3000); 
      MainPage.cateringTab.click();
      browser.getAllWindowHandles().then(function(handles){
      browserHandles=handles;
      browser.switchTo().window(browserHandles[1]).then(function(){
          });    

   
  
    
  });
      OrderingPage.orderingTab.click(); 
           
    
    })

   

    it ('customer info items should be displayed -under delivery section-', ()=> { 

       
       expect(OrderingInfoPage.customerForm.isDisplayed()).toBe(true);
      
       expect(OrderingInfoPage.deliveryDate.isDisplayed()).toBe(true);         
       expect(OrderingInfoPage.deliveryTime.isDisplayed()).toBe(true);     
       expect(OrderingInfoPage.noOfGue.isDisplayed()).toBe(true);    
       expect(OrderingInfoPage.Address.isDisplayed()).toBe(true);   
       expect(OrderingInfoPage.apt.isDisplayed()).toBe(true);   
       expect(OrderingInfoPage.city.isDisplayed()).toBe(true);       
       expect(OrderingInfoPage.state.isDisplayed()).toBe(true);  
       expect(OrderingInfoPage.zipCode.isDisplayed()).toBe(true);      
       expect(OrderingInfoPage.findLocationsButton.isDisplayed()).toBe(true);     
       expect(OrderingInfoPage.selectedState.isDisplayed()).toBe(true);       
       expect(OrderingInfoPage.pickupAddress.isDisplayed()).toBe(true);     
       expect(OrderingInfoPage.allLocationsLink.isDisplayed()).toBe(true);    
       expect(OrderingInfoPage.viewLocationsLink.isDisplayed()).toBe(true);   
       expect(OrderingInfoPage.proceedToMenu.isDisplayed()).toBe(true);   

 
    })
         
    
     
    // it ('to complete the order all the required links should be visible and clickable under the "place order" section', ()=> { 
    //     expect(OrderingInfoPage.allLocationsLink.isDisplayed()).toBe(true);    
    //     expect(OrderingInfoPage.viewLocationsLink.isDisplayed()).toBe(true);   
    //     expect(OrderingInfoPage.proceedToMenu.isDisplayed()).toBe(true);  
    //      })  



    it ("user should send his information in the right format", ()=>{ 
        for(var i=0; i<UserDataPage.customerInfo.length; i++){
            
            //OrderingInfoPage.deliveryDate
      
            OrderingInfoPage.deliveryDate.sendKeys(UserDataPage.customerInfo[i].deliDate);
            browser.sleep(1000); 
            if (UserDataPage.customerInfo[i].deliDate > OrderingInfoPage.maxDate.getText()){ 
                console.log("Please enter a valid date for your order"); 
            }else {
                console.log("passed");
            }
            OrderingInfoPage.deliveryTime.sendKeys(UserDataPage.customerInfo[i].deliTime);
            browser.sleep(1000); 
            OrderingInfoPage.noOfGue.sendKeys(UserDataPage.customerInfo[i].guests);
            browser.sleep(2000); 
            if (UserDataPage.customerInfo[i].guests == " "){ 
                console.log('Please enter a value');                         
                    }
            OrderingInfoPage.Address.sendKeys(UserDataPage.customerInfo[i].address);
            browser.sleep(2000); 
            OrderingInfoPage.apt.sendKeys(UserDataPage.customerInfo[i].suite);
            browser.sleep(2000); 
            OrderingInfoPage.city.sendKeys(UserDataPage.customerInfo[i].city);
            browser.sleep(2000);             
            OrderingInfoPage.state.sendKeys(UserDataPage.customerInfo[i].state);
            browser.sleep(2000); 
            OrderingInfoPage.zipCode.sendKeys(UserDataPage.customerInfo[i].Zipcode);
            browser.sleep(4000); 
            OrderingInfoPage.findLocationsButton.click(); 
            browser.sleep(4000); 
            //expect(OrderingInfoPage.selectedState.getText()).toEqual(UserDataPage.customerInfo[i].state); 
            //browser.sleep(4000); 
            OrderingInfoPage.selectAddress.first().click(); 
            browser.sleep(4000);                       
            OrderingInfoPage.proceedToMenu.click(); 
            browser.sleep(10000);     
           }
            
              })
  
            })
    
   

    
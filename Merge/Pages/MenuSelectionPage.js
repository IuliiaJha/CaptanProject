require('../Utilities/CustomLocators.js');
var firstPage = require('./MainPage.js'); 
var secondPage = require('./OrderingPage.js'); 
var OrderingInfoPage = require('./OrderingInfoPage.js'); 
var UserDataPage = require('../TestData/UserData.json');

var MenuSelectionPage = function(){
    this.menuCategories = $('.c-menu-categories__section');
    this.menu1 =  element(by.css('div.c-menu-categories__item.c-menu-categories__item---all-day-breakfast > div > a > img'));    
    this.menu1Function = function (){
        browser.get('https://ebcatering.com/index.cfm?fuseaction=order&action=menu-category&category-id=90');
        browser.waitForAngularEnabled(false);
    }
    this.selectMenu = $$('#children_2851 > option:nth-child(6)'); 
    this.chooseMenu = $$('#children_2851')
    this.menuSection1 = $('#psid_2849'); 
    this.menuSection2 = $ ('#psid_2850'); 
    this.menuSection3 = $ ('#psid_2851');
    this.menuSection4 = $ ('#psid_2852');
    this.menuSection4 = $ ('#psid_2853');
    this.increaseNoOfMenu = $('#sub_2851'); 
    this.submit= $('#submit_2851'); 
    this.order= $('#submit_config'); 
    this.selectMenu2 = $$('#children_2849 > option:nth-child(2)'); 
    this.chooseMenu2 = $$('#children_2849'); 
    this.increaseNoOfMenu2 = $('#sub_2849'); 
    this.submit2= $('#submit_2849'); 
    this.plusButton=$('#psid_2849 > div > fieldset > div.product-inputs > div > div > span:nth-child(3) > button');
    this.detailsButton = $('.c-button.c-button--secondary.c-drop-down__trigger.js-drop-down'); 
    this.detailsLink = $('.c-cart__details-link--details.c-drop-down__link'); 
    this.numpeople = $('#numpeople'); 
    this.checkOut = $('#submitCheckout'); 
    this.frame = element(by.buttonText('Continue')); 
    this.noOfSand = $('#production_item_1_2895_2813'); 
    this.noOfSand2 = $('#production_item_1_2895_2814'); 
    this.checkOut2 = element(by.buttonText('Proceed to checkout')); 
    this.scroll = $('#psid_2850 > div > fieldset > legend');
    this.cartIcon=element(by.css('span.c-quick-cart__icon.c-icon.c-icon--cart'))
    this.goTocartIcon=function(){
        browser.get('https://ebcatering.com/index.cfm?fuseaction=cart');
        browser.waitForAngularEnabled(false);
     }
    this.customerInfo = function(){
       //for(var i=0; i<UserDataPage.customerInfo.length; i++){
            
            OrderingInfoPage.deliveryDate.sendKeys(UserDataPage.customerInfo[0].deliDate);
            browser.sleep(1000); 
            OrderingInfoPage.deliveryTime.sendKeys(UserDataPage.customerInfo[0].deliTime);
            browser.sleep(1000); 
            OrderingInfoPage.noOfGue.sendKeys(UserDataPage.customerInfo[0].guests);
            browser.sleep(2000); 
            OrderingInfoPage.Address.sendKeys(UserDataPage.customerInfo[0].address);
            browser.sleep(2000); 
            OrderingInfoPage.apt.sendKeys(UserDataPage.customerInfo[0].suite);
            browser.sleep(2000); 
            OrderingInfoPage.city.sendKeys(UserDataPage.customerInfo[0].city);
            browser.sleep(2000);             
            OrderingInfoPage.state.sendKeys(UserDataPage.customerInfo [0].state);
            browser.sleep(2000); 
            OrderingInfoPage.zipCode.sendKeys(UserDataPage.customerInfo[0].Zipcode);
            browser.sleep(4000); 
            browser.actions().mouseMove(OrderingInfoPage.findLocationsButton).click().perform(); 
            browser.sleep(4000); 
            //expect(OrderingInfoPage.selectedState.getText()).toEqual(UserDataPage.customerInfo[0].state); 
            //browser.sleep(4000);   
            OrderingInfoPage.selectAddress.first().click(); 
            browser.sleep(4000);   
            browser.actions().mouseMove(OrderingInfoPage.proceedToMenu).click().perform(); 
            browser.sleep(4000);   
        };
            
       //};  
        this.customerInfo1= function(){
        //for(var i=0; i<UserDataPage.customerInfo.length; i++){
             
            OrderingInfoPage.deliveryDate.clear(); 
            browser.sleep(1000); 
            OrderingInfoPage.deliveryDate.sendKeys(UserDataPage.customerInfo[1].deliDate)
            browser.sleep(1000); 
            OrderingInfoPage.deliveryTime.clear();    
            browser.sleep(1000); 
            OrderingInfoPage.deliveryTime.sendKeys(UserDataPage.customerInfo[1].deliTime);
            browser.sleep(1000); 
            OrderingInfoPage.noOfGue.clear(); 
            browser.sleep(1000); 
            OrderingInfoPage.noOfGue.sendKeys(UserDataPage.customerInfo[1].guests);
            browser.sleep(2000); 
            OrderingInfoPage.Address.clear(); 
            browser.sleep(1000); 
            OrderingInfoPage.Address.sendKeys(UserDataPage.customerInfo[1].address);
            browser.sleep(1000); 
            OrderingInfoPage.apt.clear(); 
            browser.sleep(1000); 
            OrderingInfoPage.apt.sendKeys(UserDataPage.customerInfo[1].suite);
            browser.sleep(1000); 
            OrderingInfoPage.city.clear();    
            browser.sleep(1000); 
            OrderingInfoPage.city.sendKeys(UserDataPage.customerInfo[1].city);
            browser.sleep(1000);                     
            // OrderingInfoPage.state.sendKeys(UserDataPage.customerInfo [1].state);
            // browser.sleep(2000); 
            // OrderingInfoPage.zipCode.sendKeys(UserDataPage.customerInfo[1].Zipcode);
            // browser.sleep(4000); 
            // browser.actions().mouseMove(OrderingInfoPage.findLocationsButton).click().perform(); 
            // browser.sleep(4000); 
            expect(OrderingInfoPage.selectedState.getText()).toEqual(UserDataPage.customerInfo[1].state); 
            browser.sleep(4000);   
            OrderingInfoPage.selectAddress.first().click(); 
            browser.sleep(4000);   
            browser.actions().mouseMove(OrderingInfoPage.proceedToMenu).click().perform(); 
            browser.sleep(6000);   
         
             
        };  
          
   
   };
   module.exports=new MenuSelectionPage();
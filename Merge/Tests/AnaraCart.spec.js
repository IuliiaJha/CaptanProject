var SignInPage=require('../Pages/SignIn.page.js');
var cardDetailsPage=require('../Pages/cardDetails.page.js');
var MyCart=require('../Pages/MyCart.page.js');
var checkoutOrderDetailsPage=require('../Pages/checkoutOrderDetails.page.js');
var checkoutReviewOrderPage=require('../Pages/checkoutReviewOrder.page.js');
var CateringPage=require('../Pages/Catering.page.js');
var UserDataPage1=require('../TestData/UserData1.json');
var OrderingInfoPage=require('../Pages/OrderingInfoPage.js');
var MenuSelectionPage=require('../Pages/MenuSelectionPage.js');

describe("Sign in, add, pay", ()=>{  
beforeAll(function(){
browser.waitForAngularEnabled(false);

   })
  

   it('sign in', ()=>{

     CateringPage.cateringHome() 
     CateringPage.linkMyAccount.click()

    SignInPage.signInEmail.sendKeys('mikeSmithCap@gmail.com');
    SignInPage.signInPassword.sendKeys("6ffTf3K0");
    SignInPage.signInLoginButton.click()
     browser.sleep(1000);
    CateringPage.linkPlaceNewOrder.click()
    browser.sleep(1000);
        for(var i=0; i<UserDataPage1.customerInfo.length; i++){
            
    OrderingInfoPage.deliveryDate
    browser.sleep(1000); 
    OrderingInfoPage.deliveryDate.sendKeys(UserDataPage1.customerInfo[i].deliDate);
     browser.sleep(1000); 
        if (UserDataPage1.customerInfo[i].deliDate > OrderingInfoPage.maxDate.getText()){ 
        console.log("Please enter a valid date for your order"); 
        }else {
        console.log("passed");
         }
    OrderingInfoPage.deliveryTime.sendKeys(UserDataPage1.customerInfo[i].deliTime);
    browser.sleep(1000); 
    OrderingInfoPage.noOfGue.sendKeys(UserDataPage1.customerInfo[i].guests);
    browser.sleep(1000); 
        if (UserDataPage1.customerInfo[i].guests == " "){ 
        console.log('Please enter a value');                         
            }
    OrderingInfoPage.Address.sendKeys(UserDataPage1.customerInfo[i].address);
    browser.sleep(1000); 
    OrderingInfoPage.apt.sendKeys(UserDataPage1.customerInfo[i].suite);
    browser.sleep(1000); 
    OrderingInfoPage.city.sendKeys(UserDataPage1.customerInfo[i].city);
    browser.sleep(1000);             
    OrderingInfoPage.state.sendKeys(UserDataPage1.customerInfo[i].state);
    browser.sleep(1000); 
    OrderingInfoPage.zipCode.sendKeys(UserDataPage1.customerInfo[i].Zipcode);
    browser.sleep(1000); 
    OrderingInfoPage.findLocationsButton.click(); 
    browser.sleep(2000); 
    OrderingInfoPage.selectAddress.first().click(); 
    browser.sleep(2000); 
    browser.actions().mouseMove(OrderingInfoPage.proceedToMenu).click().perform();    
    browser.sleep(2000); 
    browser.waitForAngularEnabled(false)
        }
   
MenuSelectionPage.menu1Function()
           browser.executeScript('window.scrollTo(422,33);').then(function(){
            MenuSelectionPage.selectMenu2.click()
        })
browser.sleep(3000)
          browser.actions().mouseMove(MenuSelectionPage.plusButton).click().perform();
           MenuSelectionPage.submit2.click()
            browser.sleep(1000)
            MenuSelectionPage.order.click()
 browser.sleep(2000);
MenuSelectionPage.goTocartIcon(s); //cart icon
browser.sleep(5000)


MyCart.checkoutCart.click();
browser.sleep(3000);
element(by.id('submitMws')).click();

checkoutOrderDetailsPage.newCard.click()
browser.sleep(3000);
checkoutOrderDetailsPage.reviewOrder.click()

browser.sleep(3000);
browser.executeScript('window.scrollTo(170,33);').then(function(){
    browser.sleep(500)
 browser.actions().mouseMove(checkoutReviewOrderPage.enterCreditCardInfoButton).click().perform()
})

browser.sleep(2000);

cardDetailsPage.switchToFrame();
cardDetailsPage.cardAddress.sendKeys('7925 Chain Bridge Road');
cardDetailsPage.cardAddress2.sendKeys('#3300');
cardDetailsPage.cardCity.sendKeys('McLean');
cardDetailsPage.cardState.click();
cardDetailsPage.cardCvv.sendKeys("345");
cardDetailsPage.cardNum.sendKeys('5362567890101112');
cardDetailsPage.cardTypes.click()
cardDetailsPage.cardMonth.click();
cardDetailsPage.cardYear.click();
cardDetailsPage.cardEmail.sendKeys("");
cardDetailsPage.cardZip.sendKeys('22102')
cardDetailsPage.cardSubmitButton.click();
cardDetailsPage.cardTypes.click()
browser.sleep(5000)
    






             }) 
        
   


        })
        
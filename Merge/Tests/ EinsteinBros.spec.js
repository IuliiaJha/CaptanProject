    require('../Utilities/CustomLocators')
    var HomePage = require('../Pages/Home.page.js');
    var CateringPage = require('../Pages/Catering.page.js');
    var SignInPage =require('../Pages/SignIn.page.js');
    var RetrievePasswordPage = require('../Pages/RetrievePassword.page.js')
    var SignUpPage= require('../Pages/SignUp.page.js')
    var Base = require('../Utilities/Base');
    var CateringData = require('../TestData/CateringData.json') 

    var EC = protractor.ExpectedConditions;

    

describe('Catering page', () => {
    beforeAll (function(){
        browser.waitForAngularEnabled(false)
        CateringPage.cateringHome()
            });
//             afterAll(function(){
//         browser.getAllWindowHandles().then(function(arr){
//                 browser.close().then(function(){
//                     browser.switchTo().window(arr[0])
//         })
//     })
// })
it('#001 should Verify Catering page opens in new window', () => {
    browser.get('https://www.einsteinbros.com/');
    HomePage.cateringButton.click();
    browser.getAllWindowHandles().then(function(arrayWindows){
    browser.switchTo().window(arrayWindows[1]).then(function(){
    expect(browser.driver.getTitle()).toEqual("ebcatering.com | Einstein Bros. Bagels Catering")
});
});
})
it ('#002 should Verify catering logo is displayed on the page', () =>{
     expect(CateringPage.cateringLogo.isDisplayed()).toBe(true);
})
it ('#003 should  Verify navigation box categories on the catering page', () =>{
    CateringPage.navigationBoxCategories.each(function(element){
      element.getText().then(function(txt){
        CateringPage.CategoriesFromCateringPage=txt.split("\n")
        for(var i=0; i<CateringPage.expectedCategories.length; i++){
           expect(CateringPage.expectedCategories[i]).toEqual(CateringPage.CategoriesFromCateringPage[i])
              }
            })
          })
   })
it ('#004 should Verify  internal link "Home" in the Catering navigation -box', () =>{
    CateringPage.linkHome.click();
    expect(browser.getCurrentUrl()).toContain("page_id=1")
    })

it ('#005 should Verify   internal link "Place New Order" in the Catering navigation-box ', () =>{
        CateringPage.linkPlaceNewOrder.click();
        expect( CateringPage.plaseOrderHeading.isDisplayed()).toBe(true);
        browser.refresh()
    })

 it ('#006 should Verify internal link "Menu" in the Catering menu-box', () =>{
    browser.executeScript('arguments[0].click();',CateringPage.linkMenu);
    browser.sleep(1000);
    CateringPage.MenuCategories.getText().then(function(txt){
            if (txt.length==CateringPage.expectedMenuCategories.length){
                for (var i=0; i<txt.length; i++){
                    expect(txt[i]).toContain(CateringPage.expectedMenuCategories[i])
                }
            } 
        })
})
   


 it ('#007 should Verify internal link "My Account" in the Catering navigation-box', () =>{
    CateringPage.linkMyAccount.click()

    })

  

 it ('#008 should Verify presence of  Email-address input box within  SIGN IN form', () =>{

    expect(SignInPage.signInEmail.isDisplayed()).toBe(true);
    })

it ("#009 should Verify Email-address input box's placeholder text", () =>{
        expect(SignInPage.signInEmail.getAttribute('placeholder')).toEqual('*Email Address')
        })

it ("#010 should Verify Email-address input box in SIGN IN form can not be blank", () =>{
    SignInPage.signInEmail.sendKeys("");
    SignInPage.signInLoginButton.click()
   
    expect(element(by.className('c-form-item__field js-label-float validate[custom[email]]'))
    .getAttribute('aria-required')).toBe('true')
   
})

it ("#011 should Verify Email-address field of SIGN IN form requires HTML format ", () =>{
    SignInPage.signInEmail.sendKeys("aaa000");
    SignInPage.signInLoginButton.click()
   
    expect(element(by.className('c-form-item__field js-label-float validate[custom[email]]'))
    .getAttribute('aria-required')).toBe('true') 
})

it ("#012 should Verify Email-address field of SIGN IN form requires HTML format ", () =>{
    SignInPage.signInEmail.clear();
    SignInPage.signInEmail.sendKeys("aaa000@");
    SignInPage.signInLoginButton.click()
   
    expect(element(by.className('c-form-item__field js-label-float validate[custom[email]]'))
    .getAttribute('aria-required')).toBe('true') 
expect(element(by.css('.signin_member_emailformError.parentFormlogin_signin.formError > div.formErrorContent')).getText()).toEqual('* Invalid email address')
})

it ("#013 should Verify Email-address field of SIGN IN form requires HTML format ", () =>{
    SignInPage.signInEmail.clear();
    SignInPage.signInEmail.sendKeys("aaa000@.com");
    SignInPage.signInLoginButton.click()
   
    expect(element(by.className('c-form-item__field js-label-float validate[custom[email]]'))
    .getAttribute('aria-required')).toBe('true') 
})


it ("#014 should Verify changing placeholder text of Email-address input box after user entered any characters", () =>{
    SignInPage.signInEmail.clear();
    SignInPage.signInEmail.sendKeys("a");
    
    expect(SignInPage.signInEmail.getAttribute('class')).toEqual('c-form-item__field js-label-float validate[custom[email]] is-active')
})



it ("#015 should Verify  Password input box is present on the page", () =>{
    CateringPage.cateringHome()
    CateringPage.linkMyAccount.click()
    expect(SignInPage.signInPassword.isDisplayed()).toBe(true);
})

it ("#016 should Verify  Password input-box's placeholder text", () =>{
    expect(SignInPage.signInPassword.getAttribute('placeholder')).toEqual('*Password')

})

it ("#017 should Verify Password input box in SIGN IN form can not be blank", () =>{
        SignInPage.signInPassword.sendKeys("");
        SignInPage.signInLoginButton.click()
       
        expect(SignInPage.errorPopUpPasswordBlank.getAttribute('aria-required')).toBe('true')
       
    })

it ("#018 should Verify Password should be not less then 8 characters", () =>{
        SignInPage.signInEmail.sendKeys(CateringData.customers[0].email)
        SignInPage.signInPassword.sendKeys("111");
        SignInPage.signInLoginButton.click()
       
        expect(SignInPage.errorPopUpMinSizePassword.getAttribute('aria-required')).toBe('true')
       
        expect(SignInPage.errorMsgMinSizePassword.getText()).toEqual('* Minimum 8 characters allowed')
    })

  it ("#019 should Verify application does not accept invalid password", () =>{
        SignInPage.signInEmail.clear();
        SignInPage.signInEmail.sendKeys(CateringData.customers[0].email);
        SignInPage.signInPassword.clear();
        SignInPage.signInPassword.sendKeys("11111111111111111");
        SignInPage.signInLoginButton.click()
     
       // expect(element(by.css('#login_signin > div.c-signin__item.c-signin__item--email > div > div > div.formErrorContent')).getText()).toContain('Invalid sign in, please check your email and password')

    })

  it ("#020 should Verify application does not accept invalid email", () =>{
        SignInPage.signInEmail.clear();
        SignInPage.signInEmail.sendKeys("mikeSmithCap@ukr.net");
        SignInPage.signInPassword.clear();
        SignInPage.signInPassword.sendKeys(CateringData.customers[0].password);
        SignInPage.signInLoginButton.click()
   
       //expect(element(by.className('cc-form-item__field.js-label-float.validate[minSize[8]].is-active')).getAttribute('aria-required')).toBe('true')
      
        expect(element(by.css('.signin_member_emailformError.parentFormlogin_signin.formError>:nth-child(1)')).getText()).toEqual('Invalid sign in, please check your email and password')
    })

 it ("#021 should Verify  Password input box is present on the page", () =>{
        CateringPage.cateringHome();
        CateringPage.linkMyAccount.click();
        expect(SignInPage.rememberMeCheckBox.isDisplayed()).toBe(true);
        SignInPage.rememberMeCheckBox.click()
    })

 it ('#022 should Verify that user is able to login with valid email and password', () =>{
           
                SignInPage.signInEmail.sendKeys(CateringData.customers[0].email);
                SignInPage.signInPassword.sendKeys(CateringData.customers[0].password);
                SignInPage.signInLoginButton.click()
                })

 it  ("#023 should Verify limit on the total number of unsuccessful attempts SIGN IN", () =>{
           CateringPage.cateringHome()
           CateringPage.linkMyAccount.click();
           browser.executeScript('arguments[0].click();',element(by.linkText('Sign Out')));
           browser.sleep(2000)
            CateringPage.linkMyAccount.click();
            for(var i=0; i<=6; i++){
            SignInPage.signInEmail.clear()
            SignInPage.signInPassword.clear()
             SignInPage.signInEmail.sendKeys(CateringData.customers[0].email)
             SignInPage.signInPassword.sendKeys("111111111111");
             browser.executeScript('arguments[0].click();',SignInPage.signInLoginButton)
            }
            browser.sleep(2000)
           expect(SignInPage.errorMsgmaxAttempPopUp.getText()).toContain('You are temporarily locked out')
            SignInPage.maxAttempPopUpClose.click();
             
        })


 it   ("#024 should Verify that Retrieve password  link is present on the screen", () =>{
    CateringPage.cateringHome()
    CateringPage.linkMyAccount.click();
    expect(SignInPage.retrievePassword.isDisplayed()).toBe(true);
        })


 it     ("#025 should Verify that Retrieve password  link is clickable and opens RETRIEVE PASSWORD page", () =>{
            SignInPage.retrievePassword.click();
        expect(browser.getCurrentUrl()).toEqual(RetrievePasswordPage.retrievePasswordPageLink)
            
        })
        // it ("#026 should Verify that user is able submit 'Get Password' request ", () =>{
        //    RetrievePasswordPage.emailImputBox.sendKeys('mikeSmithCap@gmail.com');
        //    RetrievePasswordPage.retrievePasswordBatton.click();
        //    browser.refresh();
   
        // })
    
it ("#027 should Verify that user can't  submit 'Get Password' request witn ivalid email", () =>{
            
            RetrievePasswordPage.emailImputBox.sendKeys('mikeSmithCap@gmail');
            RetrievePasswordPage.retrievePasswordBatton.click();
            expect($('.formErrorContent').getText()).toEqual('* Invalid email address')

         })

 it ("#028 should Verify  that  Sign Up button is clickable and navigate to SIGN UP page", () =>{
            CateringPage.cateringHome()
            CateringPage.linkMyAccount.click();
           SignInPage.signUpLink.click();
           expect(browser.getCurrentUrl()).toEqual(SignUpPage.signUpPageLink)
            
         })
it ("#029 should Verify  that user is not able to Sign UP with invalid  password", () =>{
            SignUpPage.signUpFirstName.sendKeys(CateringData.customers[0].fName);
            SignUpPage.signUpLastName.sendKeys(CateringData.customers[0].lName);
            SignUpPage.signUpEmail.sendKeys(CateringData.customers[0].email);
            SignUpPage.signUpPassword.sendKeys('iiiiiiii');
             SignUpPage.signUpLoginButton.click();
            expect(SignUpPage.errorMsgPassword.getText()).toEqual('* At least one number and one letter required');
            browser.refresh()
         
            
         })
 it ("#030 should Verify  Application is not allowed user to Sign UP with already registreted email  address", () =>{
       
            SignUpPage.signUpFirstName.clear();
            SignUpPage.signUpFirstName.sendKeys(CateringData.customers[0].fName);

             SignUpPage.signUpLastName.clear();
            SignUpPage.signUpLastName.sendKeys(CateringData.customers[0].lName);
         
            SignUpPage.signUpEmail.clear();
            SignUpPage.signUpEmail.sendKeys(CateringData.customers[0].email);
          
            SignUpPage.signUpPassword.clear();
            SignUpPage.signUpPassword.sendKeys('aI50vni4');
      
            SignUpPage.signUpLoginButton.click();
            browser.sleep(1000)
            expect(SignUpPage.errorMsgPasswordEmailRegistreted.getText()).toContain('has already registered an account with us.');
            
            
         })

  })




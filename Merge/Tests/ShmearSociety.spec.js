require('../Utilities/CustomLocators.js');
var Base = require('../Utilities/Base.js');
var HomePage = require('../Pages/Home.page.js');
var RewardsPage = require('../Pages/Rewards.page.js');
var EmailPage = require('../Pages/Email.page.js');
var AppPage = require('../Pages/App.page.js');
describe("Test of functionality of joining Shmear Society",()=>{
    beforeEach(function(){
         Base.navigateToHome();
         HomePage.shmearSocietyLink.click();
         RewardsPage.JoinBtn.click();
         browser.waitForAngularEnabled(false);
        
    });
  
    describe("Email Page Test",()=>{
        it("should be able to get to Join Shmear Society Page from Home Page" ,()=>{
            Base.navigateToHome();
            HomePage.shmearSocietyLink.click();
        
            expect(element(by.xpath("//*[@class='section section-2']/div/h2")).getText()).toEqual("JOIN SHMEAR SOCIETY REWARDS TODAY!");
           
        });
  
        it("Should display a title THE BENEFITS",()=>{
            Base.navigateToHome();
            HomePage.shmearSocietyLink.click();
          
           expect(element(by.xpath("//div[@class='col-xs-12 text-center hero']/h2")).getText()).toEqual("THE BENEFITS");
        });
        it("Under the title THE BENEFITS must show 6 paragraphs",()=>{
  
           element.all(by.xpath("//div[@class='col-xs-12 col-md-7 text-block']/p/i")).count().then(function(number){
               if(number==6){
               console.log("Passed");
               }else{
                   console.log("Failed"+number);
               }
           });
        });
        it("Customer must be able to click on button CLICK HERE TO JOIN and be redirected to the corresponding page",()=>{
    
           expect(element(by.css(".logo")).isDisplayed()).toBe(true);
        });
      
        it("should display a picture of a bagel in a hat and with title The Shmear Society above.",()=>{
            expect(element(by.xpath("//img[@class='campaign-image center-block img-responsive']")).isDisplayed()).toBe(true);
        });
        it("should show an error message if email field id left blank",()=>{
            EmailPage.Phone.sendKeys("571-421-7777");
            EmailPage.Btn.click();
            expect(EmailPage.Alert.getText()).toEqual("Email address is required.");
           
        });
        it("should display an error message if email provided is an existing email",()=>{
            EmailPage.Email.sendKeys("mikeSmithCap@gmail.com");
            EmailPage.Phone.sendKeys("571-421-7777");
            EmailPage.Btn.click();
            expect(element(by.xpath("//*[@class='alert alert-success']/p")).getText()).toEqual("You are already a member of this program. Please click the Login Now button below!");
           
        });
        it("should display an error message if phone number field is left blank",()=>{
            EmailPage.Email.sendKeys("3sisters@gmail.com");
            EmailPage.Btn.click();
            expect(EmailPage.Alert.getText()).toEqual("Phone number is required.");
        });
        it("should display an error message if special characters are entered in phone number field",()=>{
            EmailPage.Email.sendKeys("3sisters@gmail.com");
            EmailPage.Phone.sendKeys("571-421-$*&@");
            EmailPage.Btn.click();
            expect(EmailPage.Alert.getText()).toEqual("Phone number format is invalid. Include all ten digits with or without standard phone punctuation. For example: ##########, (###) ###-####, or ###-###-####.");
        });
        it("should display an error message if letters are entered in phone number field",()=>{
            EmailPage.Email.sendKeys("3sisters@gmail.com");
            EmailPage.Phone.sendKeys("abc-421-7777");
            EmailPage.Btn.click();
            expect(EmailPage.Alert.getText()).toEqual("Phone number format is invalid. Include all ten digits with or without standard phone punctuation. For example: ##########, (###) ###-####, or ###-###-####.");
        });
        it("should successfully enter email and phone number and proceed to the page with application form",()=>{
            EmailPage.Email.sendKeys("gingerbread@gmail.com");
            EmailPage.Phone.sendKeys("333-421-7777");
            EmailPage.Btn.click();
            expect(element(by.xpath("//*[@class='alert alert-success']/p")).getText()).toEqual("Your email and phone have been validated. Let's get a new account created. Please enter a password.");
            
        });
    });
    describe("Application for Membership Form Test",()=>{
        beforeEach(function(){
     
            EmailPage.Email.sendKeys("gingerbread@gmail.com");
            EmailPage.Phone.sendKeys("333-421-7777");
            EmailPage.Btn.click();
        });
        it("should give an error message if password is longer or shorter than 8 characters",()=>{
            AppPage.Pass.sendKeys("123456789");
            AppPage.Confirm.sendKeys("123456789");
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("Password format is invalid. Must be eight characters and contain at least one capital letter and at least one number.");
           
        });
        it("should give an error message if password does not contain at least 1 integer",()=>{
            AppPage.Pass.sendKeys("asdfghjk");
            AppPage.Confirm.sendKeys("asdfghjk");
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("Password format is invalid. Must be eight characters and contain at least one capital letter and at least one number.");
            
        });
 
        it("should give an error message if password does not contain at least 1 capital letter",()=>{
            AppPage.Pass.sendKeys("asdfgh88");
            AppPage.Confirm.sendKeys("asdfgh88");
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("Password format is invalid. Must be eight characters and contain at least one capital letter and at least one number.");
          
        });
        it("should give an error message if password does not contain at least 1 lowercase letter",()=>{
            AppPage.Pass.sendKeys("ASDFGHJ8");
            AppPage.Confirm.sendKeys("ASDFGHJ8");
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("Password format is invalid. Must be eight characters and contain at least one capital letter and at least one number.");
            
        });
       
        it("should show an error message if First Name Field is left empty",()=>{
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("First name is required.");
        });
     
        it("should show an error message if Last Name Field is left empty",()=>{
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("Last name is required.");
        });
        it("should show an error message if Gender is not chosen",()=>{
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("Gender is required.");
        });
        it("should choose Gender from drop-down menu",()=>{
           AppPage.Gender.click();
            element(by.xpath("//*[@id='Enrollee_GenderCode']/option[2]")).click;
            AppPage.Btn.click();
            element(by.xpath("//*[@class='alert alert-danger']/p[5]")).getText().then(function(text){
                if(text!="Gender is required."){
                    console.log("Test has passed");
                }else{
                    console.log("Test failed");
                }
        });
        });
        it("should test if Gender options are correct",()=>{
            AppPage.Gender.click();
            element.all(by.xpath("//*[@id='Enrollee_GenderCode']/option")).then(function(options){
                if(options[0]=="Select Gender"&&options[1]=="Guy"&&options[2]=="Gal"&&options[3]=="Prefer not to Answer (And that's ok)"){
                    console.log("Test passed");
                }else{
                    console.log("Test Failed");
                }
            });
        });
        it("should show an error message if birthday field is empty",()=>{
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("Birthday is required.");
        });
        it("should show an error message if age of an applicant is younger than 13",()=>{
            AppPage.Birth.sendKeys("7/15/2011");
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("You must be at least thirteen years old to join.");
        });
        it("should show an error message if city field is left empty",()=>{
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("City is required.");
        });
        it("should show an error message if state is not chosen from drop-down menu",()=>{
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("State is required.");
        });
        it("should show an error message if zip code field is left empty",()=>{
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("Zip Code is required.");
        });
        it("should show an error message if there are letters in the zip code field",()=>{
            AppPage.Zip.sendKeys("afgsr");
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("Zip Code format is invalid.");
        });
        it("should show an error message if there are special characters in the zip code field",()=>{
            AppPage.Zip.sendKeys("#&*");
            AppPage.Btn.click();
            expect(AppPage.Alert.getText()).toContain("Zip Code format is invalid.");
        });
        // it("should pick an option of favorite location from drop-down menu",()=>{
        //     element(by.xpath("//*[@class='form-control favorite-store-selector']")).click();
        //     element(by.xpath('//*[@class="form-control favorite-store-selector"]/option[2]')).click();
        //     AppPage.Btn.click();
       // });
        it("should be able to uncheck checkmarks opposite Email Notifications",()=>{
            element(by.id("Enrollee_EmailNotifications")).click();
        });
        it("should be able to uncheck checkmarks opposite Catering Email Notifications",()=>{
            element(by.id("Enrollee_CateringEmailNotifications")).click();
        });
    });
    describe("Successful Joining Shmear Society Test Scenario",()=>{
        beforeEach(function(){
         
             EmailPage.Email.sendKeys("gingerbread@gmail.com");
             EmailPage.Phone.sendKeys("333-421-7777");
             EmailPage.Btn.click();
         });
         it("should test happy path",()=>{
            AppPage.Pass.sendKeys("1234567Az");
            AppPage.Confirm.sendKeys("1234567Az");
            AppPage.fName.sendKeys("Four");
            AppPage.lastName.sendKeys("Divergent");
            AppPage.Gender.click();
            element(by.xpath("//*[@id='Enrollee_GenderCode']/option[1]")).click();
            AppPage.Birth.sendKeys("7/15/1987");
            element(by.id("Enrollee_City")).sendKeys("Chicago");
            element(by.id("Enrollee_StateCode")).click();
            element(by.xpath("//*[text()='Illinois']")).click();
            AppPage.Zip.sendKeys("60007");
            element(by.css("button[class='btn btn-primary']")).click();
                   
           // element(by.xpath("//*[@class='form-control favorite-store-selector']")).click();
           // element(by.xpath("//*[@class='form-control favorite-store-selector']/option[2]")).click();
              
            element(by.id("Enrollee_EmailNotifications")).click();
            
            element(by.id("Enrollee_CateringEmailNotifications")).click();
            AppPage.Btn.click();
           
         });
                
        
    
    });
    });

require('../Utilities/CustomLocators.js')


var PageObjectModelMenu= require('../Pages/PageObjectModel.js')

describe('Project1(MENU)',()=>{
    var browserHandles = [];
    browser.waitForAngularEnabled(false);
    beforeAll(function(){
    browser.get("https://www.einsteinbros.com/");
    });

 

    it('should click on Menu',()=>{
        expect(PageObjectModelMenu.menuButton.isDisplayed()).toBe(true);
        PageObjectModelMenu.menuButton.click();
        browser.sleep(1000);
    });

    it('should verify the main image',()=>{
        expect(PageObjectModelMenu.mainImage.isDisplayed()).toBe(true);

    });
    it('should Verify the link "NEW ON UOR MENU" ',()=>{
         expect(PageObjectModelMenu.NewOnOurMenuText.getText()).toEqual("New On Our Menu");
         browser.sleep(1000);
                 
            
    });
    it('should Verify the link "Bagels and Shmear"',()=>{
        PageObjectModelMenu.BagelsShmearLink.click();
        expect(PageObjectModelMenu.BagelsShmearText.getText()).toContain("Bagels");
        browser.sleep(1000);
            

    });

    it('should verify the link "BREAKFAST"',()=>{
        PageObjectModelMenu.BreakfastLink.click();
        expect(PageObjectModelMenu.BagelsShmearText.getText()).toEqual("Breakfast");
        browser.sleep(1000);

         
    });  
    it('should verify the link "Lunch"',()=>{
        PageObjectModelMenu.LunchLink.click();
        expect(PageObjectModelMenu.LunchText.getText()).toEqual("Lunch");
        browser.sleep(1000);
    }); 
    it('should verify the link "Sweets & Snacks"',()=>{
        PageObjectModelMenu.SweetSnacksLink.click();
        expect(PageObjectModelMenu.SweetSnacksText.getText()).toContain("&");
        browser.sleep(1000);
    }); 
    it('should verify the link "Beverages"',()=>{
        PageObjectModelMenu.BeveragesLink.click();
        expect(PageObjectModelMenu.BeveragesText.getText()).toEqual("Beverages By");
        browser.sleep(1000);
    }); 
    it('should verify the link "Catering"',()=>{
        PageObjectModelMenu.CateringLink.click();
        expect(PageObjectModelMenu.CateringNewPage.getText()).toContain('IN');
        browser.sleep(1000);
        browser.navigate().back();
    });     
    it('should verify the "Download Menus and Info Link',()=>{
        
        browser.sleep(2000);
        PageObjectModelMenu.DownloadMenusInfoBtn.click();
        //PageObjectModelMenu.dropdownListInfo.click();
        PageObjectModelMenu.dropdownList.get(1).click();

        browser.getAllWindowHandles().then(function(handles){ 
        browserHandles = handles;
        browser.switchTo().window(browserHandles[1]).then(function(){ 
        browser.sleep(3000); 
        expect(browser.getCurrentUrl()).toContain('TakeoutMenu_Aug2018.pdf')
            }); 
        
    });

});

        it('should verify the "category item text"',()=>{
            //browser.get('https://www.einsteinbros.com/menu/new-on-our-menu');
            PageObjectModelMenu.SecondHeaderText.getText().then(function (txt){
            console.log(txt);
            
        

        });
    });  
    
    it('Should verify the "category item Image"',()=>{
        PageObjectModelMenu.SecondHeaderImage.count().then(function(num){
            for(let i=0;i<num;i++){
                expect(PageObjectModelMenu.SecondHeaderImage[i]).isDisplayed().toBe(true);
        }
    })
           //console.log(PageObjectModelMenu.SecondHeaderImage)

        

        
    });

});
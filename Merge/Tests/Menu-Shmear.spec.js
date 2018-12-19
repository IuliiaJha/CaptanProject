require('../Utilities/CustomLocators.js');
var Bagels = require('../Pages/Bagels&Smear.page.js')
var Navigate=require('../Utilities/Base.js')



describe('verify all links on the "Bagels and Shmear" page', ()=>{
    var EC=protractor.ExpectedConditions;
    beforeEach(function(){
        Navigate.navigateToHome()
         Bagels.goToMenu();//--//element(by.id('link-menu')).click();
         Bagels.goToBagelsPage();//--//element(by.linkText('Bagels & Shmear')).click();
         browser.sleep(1000);
    })
 
    it('should display main picture', ()=>{
        browser.wait(EC.visibilityOf(Bagels.mainPicture))
         expect(Bagels.mainPicture.isDisplayed()).toBe(true);
         browser.sleep(3000);
    });
    it('should display main Header', ()=>{
        expect(Bagels.Header.isDisplayed()).toBe(true)
        expect(Bagels.Header.getText()).toEqual('Bagels & Shmear')
    })
    it('should display Second Header', ()=>{
        expect(Bagels.afterHeader.isDisplayed()).toBe(true);
        expect(Bagels.afterHeader.getText()).toEqual('Gourmet')
    })
    it('should click to the link Bagels on the right side', ()=>{
        Bagels.linkToBagels.click();
    })
    it('should click to the link Bagels Boxes on the right side', ()=>{
        Bagels.linkToBagelBoxes.click()
        expect(browser.getCurrentUrl()).toEqual('https://www.einsteinbros.com/menu/bagels-and-shmear/bagel-boxes')
        browser.sleep(1000);
    })
    it('should click to the link Shmear on the right side', ()=>{
        Bagels.linkToShmear.click();
        expect(browser.getCurrentUrl()).toEqual('https://www.einsteinbros.com/menu/bagels-and-shmear/shmear')
    })
    it('should click on Snearfuls on the right side', ()=>{
        Bagels.linkToSmearfuls.click();
        expect(browser.getCurrentUrl()).toEqual('https://www.einsteinbros.com/menu/bagels-and-shmear/shmearfuls');
    });
    it('should verify click and close on all Images and get all Headers of them', ()=>{
         //var EC=protractor.ExpectedConditions;
        for(let i=0; i<3; i++){
            Bagels.AllImages.get(i).click();
            browser.sleep(1000);
            //browser.sleep(1000);
       
           browser.wait(EC.visibilityOf($('.modal-title>span')),12000).then(function(){
            Bagels.HeaderOfImg.getText().then(function(text){
                console.log(text);
                //Bagels.CloseImages.click();
               // browser.sleep(1000);
            })
                Bagels.NutritonFacts.getText().then(function(text1){
                    console.log(text1);
                    browser.sleep(1000);
                    Bagels.CloseImages.click();
                    browser.sleep(1000);
           })
    })
}
    })
    it('should get some Rows and columns', ()=>{
        Bagels.AllImages.count().then(function(num){
        for(let i=0; i<5; i++){
            Bagels.AllImages.get(i).click();
            browser.sleep(1000);
           
       Bagels.RowOfNutrition.getText().then(function(rows){
           console.log(rows);
           //Bagels.CloseImages.click();
       browser.sleep(2000);
        //if(Bagels.RowOfNutrition[i]=="1")
        // if(rows[i].substr(0,9)=='Total Fat'){
        //     console.log("Total fat is here");
        // }else if(rows[i].substr(0,8)=='Calories'){
        //     console.log("Calories are here")
        // }else if(rows[i].substr(0,11)=="Total Carbs"){
        //     console.log("Total Carbs are here")
        // }
        // if(i==0){
        //     expect(rows[i].substr(0,8)).toEqual('Calories');
        //     //console.log('calories verified')
        // }else if(i==1){
        //     expect(rows[i].substr(0,9)).toEqual('Total Fat');
        //     //console.log('TF verified')
        // }else if(i==2){
        //     expect(rows[i].substr(0,11)).toEqual('Total Carbs');
        //     //console.log('TC verified')
        // }
        //else if(i==3){
        //     expect(rows[i].substr(0.7)).toEqual('Protein 13');
        //     console.log("Protein verified")
        // }
        browser.sleep(1000);
        Bagels.CloseImages.click();
        browser.sleep(1000);
       });
    };
})
    })
})
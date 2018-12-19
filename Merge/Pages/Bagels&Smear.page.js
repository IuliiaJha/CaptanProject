require('../Utilities/CustomLocators')
var BagelsPage= function(){
    this.mainPicture=element(by.className('hero-img-desk'));
    this.Header=$('.col-xs-12.col-lg-6.menu-title>h1'); //bagels& shmear
    this.afterHeader=element(by.css('.menu-body>div>:nth-child(2)>h2')); // gourmet - which is under the Header
    this.buttonGoToMenu=element(by.css('#link-menu'));
    this.BagelsAndShmear=element(by.linkText('Bagels & Shmear'));
    this.linkToBagels=$('.list-inline.tablist>:nth-child(1)>a');
    this.linkToBagelBoxes=$('.list-inline.tablist>:nth-child(2)>a');
    this.linkToShmear=$('.list-inline.tablist>:nth-child(3)>a')
    this.linkToSmearfuls=$('.list-inline.tablist>:nth-child(4)>a')
    this.AllImages=$$('div.menu-body>div img');
    this.CloseImages=$('button.close span');
    this.HeaderOfImg=$('.modal-title>span');
    this.NutritonFacts=$('.modal-nutrition');
    //this.tableOfNutrition=$('.modal-nutrition>:nth-child(2)');
    this.RowOfNutrition=$$('.list-unstyled.nutrition-list li');
    this.ViewProductButton=element(by.css('.btn-outline'));
    this.goToMenu= function(){
        this.buttonGoToMenu.click()
        }
    this.goToBagelsPage= function(){
        this.BagelsAndShmear.click();
        }
}
module.exports = new BagelsPage();
require('../Utilities/CustomLocators.js');
var firstPage = require('./MainPage.js')

var OrderingPage = function(){
    this.orderingTab=element(by.css('.c-site-nav__item.c-site-nav__item--20.c-site-nav__item--catering-order > a'));
      
    this.deliveryButton = element(by.buttonText('Delivery'));  
    this.pickupButton =element(by.buttonText('Pick Up'));
    this.browserHandles=[]; 
 
};


module.exports=new OrderingPage();
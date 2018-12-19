require('../Utilities/CustomLocators.js');
var firstPage = require('./MainPage.js'); 
var secondPage = require('./OrderingPage.js');  

var OrderingInfoPage = function(){
 this.customerForm = $('#preorder');
 this.deliveryDate = $('#date_req'); 
 this.deliveryTime = $('#timereq'); 
 this.noOfGue = $('#numpeople'); 
 this.Address = $('#delivery_address_street1'); 
 this.apt = $('#delivery_address_street2'); 
 this.city = $('#delivery_address_city'); 
 this.state = $('#delivery_address_state'); 
 this.zipCode = $('#postal'); 
 this.findLocationsButton = $('#preorder_find_store'); 
 this.selectedState = $('#pic_state > option:nth-child(2)'); 
 this.pickupAddress = $('#pic_store')
 this.allLocationsLink = $('#pic_store');
 this.viewLocationsLink = $('#view_store') ; 
 this.proceedToMenu = $('#submitMenu');
 this.browserHandles=[]; 
 this.maxDate = element(by.css('#date_req_max')); 
 this.selectAddress = $$('#pic_store > option') ;
};
module.exports=new OrderingInfoPage();

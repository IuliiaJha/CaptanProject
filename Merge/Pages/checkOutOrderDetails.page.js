var checkoutOrderDetailsPage=require('./checkoutOrderDetails.page.js')
checkoutOrderDetailsPage=function(){

    this.reviewOrder=element(by.id('submitCheckout'));
  
    this.memberName=element(by.id("memberFirstName"));
    this.memberLastName=element(by.id("memberLastName"));
    this.memberPhone=element(by.id("memberPhone"));
    this.newCard= element(by.id("profile_id_-1_label"))
    this.goToChechoutReviewOrderPage=function(){
   checkoutOrderDetailsPage.reviewOrder.click()



}


}
module.exports = new checkoutOrderDetailsPage();
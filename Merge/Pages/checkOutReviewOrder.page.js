var checkoutReviewOrderPage=require('./checkoutOrderDetails.page.js')
checkoutReviewOrderPage=function(){

    this.enterCreditCardInfoButton=element(by.id('submitReview'));
    this.goToCardDetailsPage=function(){
        checkoutReviewOrderPage.enterCreditCardInfoButton.click()
    }
    


}
module.exports = new checkoutReviewOrderPage();
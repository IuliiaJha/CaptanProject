var MyCart = function(){
    
    this.cart=element(by.className(".is-active js-cart-item"));
     this.decreaseButton=element(by.css('.c-form-item__button>button.js-quantity-decrease'));
     this.increaseButton=element(by.css('.c-form-item__button>button.js-quantity-increase'));
    this.modifyLink=element(by.className("c-cart__item-action-edit"));
    this.removeItemLink=element(by.className('c-cart__item-action-delete js-cart-delete'));
    this.orderDetailsDropdown=element(by.className("c-drop-down__icon"));
    this.applyButton=element(by.buttonText("Apply"));
    this.checkoutCart=element(by.className('js-cart-checkout'));
    this.couponInputBox=element(by.id('coupon'))
     

    this.goToCheckOutOrderDetailsPage=function(){
       MyCart.checkoutCart.click()
    }
    }
    

module.exports = new MyCart();
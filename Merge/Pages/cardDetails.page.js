cardDetailsPage=function(){

    //this.cardFullName=element(by.css("tbody>:nth-of-type(5)>:nth-of-type(2)>input"));
  this.cardAddress=element(by.css('tr:nth-child(6) > td:nth-child(2) > input'))
    this.cardAddress2=element(by.css('tr:nth-child(7) > td:nth-child(2) > input[type="text"]'));
    this.cardCity=element(by.css('tr:nth-child(8) > td:nth-child(2) > input[type="text"]'));
   this.cardState=element(by.css("option[value='VA']"))
    this.cardZip=element(by.css('tr:nth-child(11) > td:nth-child(2) > input[type="text"]'));
    this.cardCountry=element(by.css("option[value='US']"))
    this.cardTypes= element.all(by.css("input[type='radio']"));
    this.cardNum= element(by.css('tr:nth-child(14) > td:nth-child(2) > input[type="text"]'));
    this.cardCvv=element(by.css("tr:nth-child(15)>td:nth-child(2) > input[type='text']"));
    this.cardMonth=element(by.css("option[value='10']"));
    this.cardYear=element(by.css("option[value='21']"));
    this.cardEmail=element(by.css(' tr:nth-child(17) > td:nth-child(2) > input[type="text"]'))

    this.cardSubmitButton=element(by.css('tr:nth-child(21) > td:nth-child(2) > input[type="submit"]:nth-child(1)'))
    // this.cardResetButton=element(by.cssContainingText("type","reset"))
  this.switchToFrame=function(){
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iFrame')))
browser.sleep(1000);
  }
}
module.exports= new cardDetailsPage()
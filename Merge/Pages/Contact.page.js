var ContactPage= function(){
    this.leftBox= element(by.className('subnav-container'));
    this.leftBoxLinks= element.all(by.css('#nav-sidenav>li'));
    this.supportCenterAdress= element.all(by.css('.col-sm-12>p'));
    this.cateringLink= element(by.linkText('www.ebcatering.com'));
    this.phoneNumber= element(by.linkText('1-800-BAGELME'));
    this.linkToPage= element.all(by.linkText('click here'));

}
module.exports= new ContactPage();
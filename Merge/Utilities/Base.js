var Base = function(){
    this.homeUrl = 'https://www.einsteinbros.com/'
    this.navigateToHome = function (){
    browser.get(this.homeUrl)
    };
}
module.exports = new Base();
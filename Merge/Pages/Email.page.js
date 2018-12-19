var EmailPage=function(){
    this.Btn=element(by.css("button[class='btn btn-primary']"));
    this.Email= element(by.id('Credentials_EmailAddress'));
    this.Phone=element(by.id('Credentials_PhoneNumber'));
    this.Alert=element(by.xpath("//*[@class='alert alert-danger']/p"));
 };
 module.exports=new EmailPage();
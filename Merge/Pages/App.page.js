var AppPage=function(){
    this.Btn=element(by.css("button[class='btn btn-primary']"));
    this.Pass=element(by.id("Credentials_Password"));
    this.Confirm=element(by.id("Credentials_PasswordConfirmation"));
    this.Alert=element.all(by.xpath("//*[@class='alert alert-danger']/p"));
    this.fName=element(by.id("Enrollee_FirstName"));
    this.lastName=element(by.id("Enrollee_LastName"));
    this.Gender= element(by.id("Enrollee_GenderCode"));
    this.Birth=element(by.id("Enrollee_Birthday"));
    this.Zip= element(by.id("Enrollee_ZipCode"));
 };
 module.exports= new AppPage();
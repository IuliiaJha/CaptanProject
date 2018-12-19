
var HomePage=function(){
    ///////header part(LOGO, MENU, FIND A STORE,etc..)/////////////
        this.homeLogo=element(by.className('header__logo'));
        this.FindaStoreLink=element(by.id('link-find_a_store'));
        this.menuLink=element(by.id('link-menu'));
        this.shmearSocietyLink=element(by.linkText('Shmear Society'));
        this.cateringLink=element(by.id('link-catering'));
        this.cateringButton=$('#link-catering');
        this.goodFoodFightLink=element(by.id('link-food'));
        ////TOP HEADER PART RIGHT SIGHT (GIFT CARDS, CONTACT, NUTRITION, CAREER)////
        this.headerLinks=$$('.header__navitem.header__navitem--alt');
        ////TOP HEADER RIGHT SIDE SOCIALLINKS//////////
        this.socialLinks=element.all(by.className('header__soclink'));
        ///////////SLIDE SHOW CAROUSEL//////////
        this.FirstSlide=$('#marquee-main > ol > li:nth-child(1)');
        this.SecondSlide=$('#marquee-main > ol > li:nth-child(2)');
        this.ThirdSlide=$('#marquee-main > ol > li:nth-child(3)')
        this.img1Src=$('#marquee-main > div.carousel-inner > div:nth-child(1) > div > picture > img')
        this.img2Src=$('#marquee-main > div.carousel-inner > div:nth-child(2) > div > a > picture > img')
        this.img3Src=$('#marquee-main > div.carousel-inner > div:nth-child(3) > div > a > picture > img')
    
    
        this.leftButtonCarousel=element(by.id('marquee-left'));
        this.rightButtonCarousel=element(by.id('marquee-right'));
        this.playButton=element(by.id('play-btn'));
        this.pauseButton=element(by.id('pause-btn'));
        this.CarouselIndicators=$$('.carousel-indicators>li')//tere are 3 of them
        /////////MIDDLE PART WITH IMAGES//////////
        this.mainImages=$$('.main-img');//3 images in the middle
        this.SignUpButton=element(by.id('eclub_submit_link'));
        this.LearnMoreLinks=$$('div.promo-content > div >a');// there are 2 of them
        this.textInImages=$$('.promo-content >:nth-child(2)')
        /////////Images with link///////
        this.imagesLinks=element.all(by.css('.promo-content>picture>:nth-child(2)'))//2 of them
        this.AllLinks=$$('div#ftr-links a');
        //////////FOOTER PART////////////////
        this.MainMenu=$('#ftr-links > div:nth-child(2) > ul > li:nth-child(1) > a');
        this.CateringMenu=$('#ftr-links > div:nth-child(2) > ul > li:nth-child(2) > a')
        this.OURFOOD=$('#ftr-links > div:nth-child(2) > ul > li:nth-child(3) > a');
        this.ABOUTUS=$('#ftr-links > div:nth-child(3) > ul > li:nth-child(1) > a'); 
        this.CAREERS=$('#ftr-links > div:nth-child(3) > ul > li:nth-child(2) > a');
        this.ContactUs=$('#ftr-links > div:nth-child(3) > ul > li:nth-child(3) > a');
        this.FAQS=$('#ftr-links > div:nth-child(3) > ul > li:nth-child(4) > a');
        this.PRIVACYPOLICY=$('#links-legal > li:nth-child(1) > a');
        this.TERMSOFUSE=$('#links-legal > li:nth-child(2) > a');
        this.ADACOMPLIANCE=$('#links-legal > li:nth-child(3) > a')
        this.MainMenuURL= $$('div#ftr-links a').get(0);
        this.OURFOODURL=$('#ftr-links > div:nth-child(2) > ul > li:nth-child(3) > a')
        this.ABOUTUSURL=$('#ftr-links > div:nth-child(3) > ul > li:nth-child(1) > a')
        this.CAREERSURL=$('#ftr-links > div:nth-child(3) > ul > li:nth-child(2) > a')
        this.ContactUsURL=$('#ftr-links > div:nth-child(3) > ul > li:nth-child(3) > a')
        this.FAQSURL=$('#ftr-links > div:nth-child(3) > ul > li:nth-child(4) > a')
        this.CateringMenuURL= $('#ftr-links > div:nth-child(2) > ul > li:nth-child(2) > a')
       
    
    
    };
    module.exports=new HomePage();


    
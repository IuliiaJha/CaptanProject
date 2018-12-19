require('../Utilities/CustomLocators.js');
var HomePage = require('../Pages/Home.page.js')

var CateringPage = function (){
this.cateringLogo  = $('.cateringlogo');
this.cateringHome = function(){
    browser.get('https://ebcatering.com/')
    };
this.navigationBoxCategories=$$('.c-site-nav');
this.expectedCategories = 
["Home",
"Place New Order",
"Menu",
"My Account",
"Caribou Coffee",
"Fundraising Program",
"Customer Service"
];
this.CategoriesFromCateringPage=[];
this.linkHome=element(by.linkText('Home'));
this.linkPlaceNewOrder=element(by.className('c-site-nav__link js-site-nav-link--catering-order '));
this.plaseOrderHeading=element(by.id('heading_preorder'));
this.linkMenu=$('a.c-site-nav__link.js-site-nav-link.js-site-nav-link--catering-menu');
this.MenuCategories=element.all(by.css('ul.c-site-nav__sub-list.js-site-nav-content.is-expanded>li>a'))
this.expectedMenuCategories=[
"All",
"All Day Breakfast",
"Sweets, Fruit & More",
"Lunch Classics",
"Beverages"
]

this.linkMyAccount=element(by.linkText('My Account'))


}
 

    
    
    
    
    module.exports= new CateringPage ()
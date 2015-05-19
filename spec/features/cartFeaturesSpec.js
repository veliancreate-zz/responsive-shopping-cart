'use strict';

describe('Cart', function(){
  
  describe('User can add order to shopping cart', function(){
  
    beforeEach(function(){
      browser.get('/')
    });

    it('should display all the products', function(){
      expect(element.all(by.repeater('product in products')).count()).toEqual(13);
    });
    
    it('the home page h1 should be Threds Catalogue', function(){
      expect(element(by.css('h1')).getText()).toEqual('Threds Catalogue');
    });

    it('the cart page h1 should be My Cart', function(){
      var links = element.all(by.css('nav a'));
      links.get(1).click();
      expect(element(by.css('h1')).getText()).toEqual('My Cart')      
    });

  });

});  
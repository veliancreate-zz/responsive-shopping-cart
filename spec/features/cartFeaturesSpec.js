'use strict';

describe('Cart', function(){
  describe('User can add order to shopping cart', function(){
    it('should display all the products', function(){
      browser.get('/');
      expect(element.all(by.repeater('product in products')).count()).toEqual(13);
    });
    it('should display the right pages when you click links', function(){
      browser.get('/');
      var links = element.all(by.css('nav a'))
      expect(element(by.css('h1')).getText()).toEqual('Threds Catalogue')
      links.get(1).click();
      expect(element(by.css('h1')).getText()).toEqual('My Cart')
    });
  });
});  
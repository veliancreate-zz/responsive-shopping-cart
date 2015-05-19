'use strict';

describe('Cart', function(){
  describe('User can add order to shopping cart', function(){
    it('should display all the products', function(){
      browser.get('/')
      expect(element.all(by.repeater('product in products')).count()).toEqual(13);
    });
  });
});  
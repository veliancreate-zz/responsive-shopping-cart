'use strict';
var helper = require('../helpers/helpers')

describe('Cart', function(){
  
  describe('Display', function(){
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
      helper.clickCartLink();
      expect(element(by.css('h1')).getText()).toEqual('My Cart')      
    });
  })

  describe('User can add order to shopping cart', function(){
    beforeEach(function(){
      browser.get('/')
    });

    it('should have 0 items in the cart on the homepage initially', function(){
      expect(element(by.css('#nav-items')).getText()).toEqual('Items: 0');
    }); 

    it('should have 0 items on the cart page initially', function(){
      expect(element.all(by.repeater('product in productsInCart')).count()).toEqual(0);
    });

    it('can add items to the homepage cart', function(){
      helper.addThreeItems();
      expect(element(by.css('#nav-items')).getText()).toEqual('Items: 3');  
    });

    it('can add items to the cart page', function(){
      helper.addThreeItems();
      helper.clickCartLink();
      expect(element.all(by.repeater('product in productsInCart')).count()).toEqual(3); 
    });
  });

  describe('User can remove items from cart', function(){
    beforeEach(function(){
      browser.get('/')
    });
    it('can remove items after adding', function(){
      helper.addThreeItems();
      helper.removeTwoItems();  
      expect(element(by.css('#nav-items')).getText()).toEqual('Items: 1');  
    });
  });

});  
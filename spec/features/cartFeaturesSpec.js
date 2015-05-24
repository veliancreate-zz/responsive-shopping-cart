'use strict';
var helper = require('../helpers/helpers')

describe('Cart', function(){
  
  describe('Display', function(){
    beforeEach(function(){
      browser.get('/');
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
  });

  describe('User can add items to shopping cart', function(){
    beforeEach(function(){
      browser.get('/');
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

    it('can tell the quantity of a product in the cart', function(){
      helper.addThreeItems();
      var links = element.all(by.css('.add-product'));
      links.get(0).click();
      helper.clickCartLink();
      var list = element.all(by.css('.cart-quantity')).first();
      expect(list.getText()).toEqual('2');
    });
  });

  describe('User can remove items from cart', function(){
    beforeEach(function(){
      browser.get('/');
    });

    it('can remove items after adding', function(){
      helper.addThreeItems();
      helper.removeTwoItems();  
      expect(element(by.css('#nav-items')).getText()).toEqual('Items: 1');  
    });
  });

  describe('User can see current total', function(){
    beforeEach(function(){
      browser.get('/');
    });

    it('can display the total on clicking the add button', function(){
      helper.addThreeItems();
      expect(element(by.css('#nav-total')).getText()).toEqual('Current total: £175');
    });

    it('can display the total on clicking the add button, and updates on remove', function(){
      helper.addThreeItems();
      helper.removeTwoItems();  
      expect(element(by.css('#nav-total')).getText()).toEqual('Current total: £34');
    });
  });

  describe('User can add discounts', function(){
    beforeEach(function(){
      browser.get('/');
    });

    it('can display a discount when correct code is entered', function(){
      helper.addDiscount1();
      expect(element.all(by.repeater('discount in discountsRedeemed')).count()).toEqual(1);
    });
  });

  describe('User can view total with discounts applied', function(){
    beforeEach(function(){
      browser.get('/');
    }); 
    it('can apply discount1 to the total', function(){
      helper.addDiscount1();
      helper.addThreeItems();
      expect(element(by.css('#nav-total')).getText()).toEqual('Current total: £170');
    });
    it('can apply discount2 to the total', function(){
      helper.addDiscount2();
      helper.addThreeItems();
      expect(element(by.css('#nav-total')).getText()).toEqual('Current total: £165');
    });
    it('can apply discount3 to the total', function(){
      helper.addDiscount3();
      helper.addThreeItems();
      expect(element(by.css('#nav-total')).getText()).toEqual('Current total: £160');
    });
    it('can apply cumulative discounts to the total', function(){
      helper.addAllDiscounts();  
      helper.addThreeItems();
      expect(element(by.css('#nav-total')).getText()).toEqual('Current total: £145');
    });     
  });

  describe('User cannot add invalid discounts', function(){
    beforeEach(function(){
      browser.get('/');
    }); 
    it('the error message is visible if you enter a wrong code', function(){
      element(by.model('discountCode')).sendKeys('invalidcode\n');
      expect(element(by.css('#discount-error')).isDisplayed()).toBeTruthy();
    });  
  });
  describe('User cannot add out of stock items to the cart', function(){
    beforeEach(function(){
      browser.get('/');
    });
    it('should not add items to the cart if they are out of stock', function(){
      var links = element.all(by.css('.add-product'));
      links.get(4).click();
      expect(element(by.css('#nav-items')).getText()).toEqual('Items: 0');
      expect(element.all(by.repeater('product in productsInCart')).count()).toEqual(0); 
    });
  });

});  
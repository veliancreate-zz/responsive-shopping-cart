module.exports = {
  addThreeItems: function () {
    var links = element.all(by.css('.add-product'));
    links.get(0).click();
    links.get(1).click();
    links.get(2).click();
  },
  clickCartLink: function(){
    var links = element.all(by.css('nav a'));
    links.get(1).click();
  },
  removeTwoItems: function(){
    var links = element.all(by.css('.remove-product'));  
    links.get(0).click();
    links.get(1).click();
  },
  addDiscount1: function(){
    element(by.model('discountCode')).sendKeys('ABCD1234');
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  },
  addDiscount2: function(){
    element(by.model('discountCode')).sendKeys('1234ABCD');
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  },  
  addDiscount3: function(){
    element(by.model('discountCode')).sendKeys('qwertyui');
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  },
  addAllDiscounts: function(){
    var Key = protractor.Key;
    element(by.model('discountCode')).sendKeys('ABCD1234\n');
    element(by.css('#discount-form input')).clear();
    element(by.model('discountCode')).sendKeys('1234ABCD\n');
    element(by.css('#discount-form input')).clear();
    element(by.model('discountCode')).sendKeys('qwertyui\n');
  }
};
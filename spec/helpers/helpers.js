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
  }
};
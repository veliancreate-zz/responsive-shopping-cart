cart.service('calculatorService', ['$http', function($http){
  var discountsClaimed = [];
  var isCodeError;
  applydiscounts = function(inCart, total){
    discountsClaimed.forEach(function(discount){
      if(total >=5 && discount1(discount)){ total -= 5; }
      if(total >=10 && discount2(total, discount)){ total -= 10; }
      if(total >=15 && discount3(total, discount, inCart)){ total -= 15; }  
    });
    return total;
  };

  discount1 = function(discount){
    return discount.discountCode === "ABCD1234";
  };

  discount2 = function(total, discount){
    return discount.discountCode === "1234ABCD" && total > 50;
  };

  discount3 = function(total, discount, inCart){
    var proceed = false;
    if(discount.discountCode === "qwertyui" && total > 75) {
      inCart.forEach(function(item){
        if(item.category.indexOf("Footwear") > -1){ 
          proceed = true;
        }
      });
    }
    return proceed;
  };

  isDiscountClaimed = function(discountCode){
    claimed = false;
    for(var i = 0; i<discountsClaimed.length; i++){
      if(discountCode === discountsClaimed[i].discountCode){
        claimed = true;
      }
    }
    return claimed;
  };

  return{
    discounts: function() {
      var promise = $http.get('/json/discounts').then(function (response) {
        return response.data;
      });
      return promise;
    },
    checkCode: function(discountCode, discounts){
      isCodeError = true;
      if(!isDiscountClaimed(discountCode)){
        discounts.forEach(function(discount){
          if(discount.discountCode === discountCode){
            discountsClaimed.push(discount);
            isCodeError = false;
          }    
        });
      }
    },
    isCodeError: function(){
      return isCodeError;
    },
    discountsClaimed: function(){
      return discountsClaimed;
    },
    total: function(inCart) {
      var total = 0;
      for(var i = 0; i < inCart.length; i++){
        total += inCart[i].price;
      }
      return applydiscounts(inCart, total);
    },
  };  
}]);
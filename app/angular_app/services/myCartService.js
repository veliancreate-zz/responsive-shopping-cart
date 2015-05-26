cart.service('myCartService', [function(){
  return{
    displayCart: function(inCart){
      var prettyCart = [];
      for(var i = 0; i < inCart.length; i++) {
        var count = 0;
        for(var x = 0; x < inCart.length; x++) {
          if(inCart[i].name === inCart[x].name){
            count ++;
            prettyCart.push(inCart[i]);
            prettyCart[prettyCart.length -1].count = count;
          }    
        }
      }
      return _.uniq(prettyCart, 'name');
    },  
  };    
}]);
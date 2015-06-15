//had to do this, otherwise the page would render before the dataset was actually populated.
$.ajaxSetup({ async: false });

angular.module('tatchaList', [])
  .controller('tatchaController', function ($scope) {
    var myURL = "http://api.tatcha.com/shop/api/rest/products?page=1&limit=5&order=name&dir=asc";
    /*var baseURL = "http://api.tatcha.com/shop/api/rest/products";
    var currentPage = 1;
    var limit = 10;
    var order = "name";
    var dir = "asc";
    //write this as a function of some sort */
    var products = $.ajax(myURL);
    $scope.productList = products.responseJSON;

    this.productUrl = function productUrl(product) {
      //need to hit the rest api again to get url.  
    };

  });



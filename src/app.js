define('app', ['jquery', 'underscore'], function($, _) {
  function App() {
    this.add = function(a, b) {
      return a + b;
    };
    
    this.count = function(arr) {
      return _.size(arr);
    };

    this.getEven = function(arr) {
      return $(arr).filter(function(index) {
        return arr[index] % 2 == 0;
      }).toArray();
    };
  }
  return new App();
});

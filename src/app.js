define('app', ['jquery', 'underscore'], function($, _) {
  function App() {
    this.add = function(a, b) {
      return a + b;
    }
  }
  return new App();
});

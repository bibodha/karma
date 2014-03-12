define(['app', 'jquery', 'underscore'], function (app, $, _) {
  describe('just checking', function() {
    it('app should be defined', function() {
        // just checking that _ works
      expect(app).toBeDefined();
    });

    it('add should return 3', function() {
      expect(app.add(1,2)).toEqual(3);
    });

    it('count should return 4', function() {
      expect(app.count([0,1,2,3])).toEqual(4);
    });

    it('should return even', function () {
      var arr = [0,1,2,3,4];
      var newArr = app.getEven(arr);

      expect(newArr).toContain(2);
      expect(newArr).toNotContain(3);
    });
  });
  describe('just checking', function() {
    it('app should be defined', function() {
        // just checking that _ works
      expect(app).toBeDefined();
    });

    it('add should return 3', function() {
      expect(app.add(1,2)).toEqual(3);
    });

    it('count should return 4', function() {
      expect(app.count([0,1,2,3])).toEqual(4);
    });

    it('should return even', function () {
      var arr = [0,1,2,3,4];
      var newArr = app.getEven(arr);

      expect(newArr).toContain(2);
      expect(newArr).toNotContain(3);
    });
  });
  describe('just checking', function() {
    it('app should be defined', function() {
        // just checking that _ works
      expect(app).toBeDefined();
    });

    it('add should return 3', function() {
      expect(app.add(1,2)).toEqual(3);
    });

    it('count should return 4', function() {
      expect(app.count([0,1,2,3])).toEqual(4);
    });

    it('should return even', function () {
      var arr = [0,1,2,3,4];
      var newArr = app.getEven(arr);

      expect(newArr).toContain(2);
      expect(newArr).toNotContain(3);
    });
  });
});


describe('testFunction', function() {

  //We can check if the testFunction exists and is a function by asking if it's equal to jasmine.any(Function);
  it('should exist', function() {
    expect(testFunction).toEqual(jasmine.any(Function));
  });

  it('should multiply numbers by two', function() {
    //Automate testing here. We can write one for loop and do a as many tests as we want to really make sure that the function is working...
    for (var i = 1; i <= 10; i++) {
      expect(testFunction(i)).toEqual(i*2);
    }
    //...or we can write the tests out one by one using integers.
    expect(testFunction(2)).toEqual(4);
    expect(testFunction(4)).toEqual(8);
    expect(testFunction(8)).toEqual(16);
  })
});

//Now let's write a function that calls an api and receives a user item back.
//Before we write any code, let's build the tests to test what it should be doing.
describe('mainCtrl', function() {
  //This helps Jasmine recognize the angular module
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // This creates a $controller variable which we can use later to call the controller in question in order to properly access its content.
    // The injector function unwraps the underscores from around the parameter names when matching.
    $controller = _$controller_;
  }))

  describe('$scope.getUser', function() {
    // This will reach into the specific mainCtrl controller so we can properly access its stuff.
    // At least, it should. But for whatever reason we can't do this beforeEach, we have to do it within each thing.
    // beforeEach(function() {
    //   var $scope = {};
    //   var controller = $controller('mainCtrl', { $scope: $scope });
    // })


    it('should exist', function() {
      var $scope = {};
      var controller = $controller('mainCtrl', { $scope: $scope });
      expect($scope.getUser).toEqual(jasmine.any(Function));
    })

    it('should retrieve a user object', function() {
      var $scope = {};
      var controller = $controller('mainCtrl', { $scope: $scope });
      expect($scope.getUser()).toEqual(jasmine.any(Object));
    })

    describe("$scope.username", function() {
      // The done() function allows us to properly do async. It will ensure that all the code above it has finished before moving on, where we check for the $scope.username. 
      it('should have a username of "Steven"', function(done) {
        var $scope = {};
        var controller = $controller('mainCtrl', { $scope: $scope });
        $scope.getUser();
        done();
        expect($scope.username).toEqual({username: "Steven"})
      })
    })
  })
})
